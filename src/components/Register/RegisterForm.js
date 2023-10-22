import { useReducer, useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import { formReducer, initialState } from "./RegisterReducer";
import UserService from "../../api/services/UserService";
import { AppContext } from "../../AppContext";

import UserForRegisterDto from "../../api/models/UserForRegisterDto";
import UserForLoginDto from "../../api/models/UserForLoginDto";

const RegisterForm = () => {
  const { appState, setAppState } = useContext(AppContext);
  const [state, dispatch] = useReducer(formReducer, initialState);
  const [errorMsg, setErrorMsg] = useState("");

  const navigate = useNavigate();

  const handleUsernameChange = (e) => {
    dispatch({ type: "UPDATE_USERNAME", payload: e.target.value });
  };

  const handleEmailChange = (e) => {
    dispatch({ type: "UPDATE_EMAIL", payload: e.target.value });
  };
  const handlePasswordChange = (e) => {
    dispatch({ type: "UPDATE_PASSWORD", payload: e.target.value });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    setErrorMsg("");

    if (state.isFormValid) {
      // create dto for register
      const model = new UserForRegisterDto(
        state.username.trim(),
        state.email.trim(),
        state.password.trim()
      );

      // attempt register
      const userService = new UserService();

      userService
        .register(model)
        .then((user) => {
          // basic handling of user not created
          if (!user) {
            setErrorMsg("User may already exist!");
          }
        })
        .then(() => {
          // successfully registered, now login

          // create dto for login
          const model = new UserForLoginDto(
            state.username.trim(),
            state.password.trim()
          );

          // attempt login
          userService.login(model).then((tokenResult) => {
            // set state in context api
            setAppState({
              ...appState,
              user: state.username,
              token: tokenResult,
            });
            navigate("../dashboard");
          });
        });
    }
  };
  return (
    <div className="dialog-container">
      <form className="dialog-form" onSubmit={onSubmitHandler}>
        <h2>Register</h2>
        <div className="form-group">
          <label>Username</label>
          <input
            type="text"
            placeholder="Username"
            onChange={handleUsernameChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            placeholder="your@email.com"
            onChange={handleEmailChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            placeholder="Password"
            onChange={handlePasswordChange}
            required
          />
        </div>
        {errorMsg && <span className="error">{errorMsg}</span>}
        <br />
        <button type="submit">Register</button>
        <p>
          Already have an account? <Link to="/">Login here</Link>
        </p>
      </form>
    </div>
  );
};

export default RegisterForm;
