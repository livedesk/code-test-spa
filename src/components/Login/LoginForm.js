import { useReducer, useState, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import { AppContext } from "../../AppContext";
import UserService from "../../api/services/UserService";
import UserForLoginDto from "../../api/models/UserForLoginDto";
import { formReducer, initialState } from "./LoginReducer";

const LoginForm = () => {
  const { appState, setAppState } = useContext(AppContext);
  const [state, dispatch] = useReducer(formReducer, initialState);
  const [errorMsg, setErrorMsg] = useState("");

  const navigate = useNavigate();

  const handleUsernameChange = (e) => {
    dispatch({ type: "UPDATE_USERNAME", payload: e.target.value });
  };

  const handlePasswordChange = (e) => {
    dispatch({ type: "UPDATE_PASSWORD", payload: e.target.value });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    setErrorMsg("");

    if (state.isFormValid) {
      // create dto
      const model = new UserForLoginDto(
        state.username.trim(),
        state.password.trim()
      );

      // attempt login
      const userService = new UserService();

      userService.login(model).then((tokenResult) => {
        if (!tokenResult) {
          setErrorMsg("Username or password invalid");
        } else {
          // set state in context api
          setAppState({
            ...appState,
            user: state.username,
            token: tokenResult,
          });

          // user logged in, navigate to dashboard
          navigate("dashboard");
        }
      });
    }
  };
  return (
    <div className="dialog-container">
      <form className="dialog-form" onSubmit={onSubmitHandler}>
        <h2>Login</h2>
        <div className="form-group">
          <label>Username</label>
          <input
            type="text"
            placeholder="Username"
            required
            value={state.username}
            onChange={handleUsernameChange}
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            placeholder="Password"
            required
            value={state.password}
            onChange={handlePasswordChange}
          />
        </div>
        {errorMsg && <span className="error">{errorMsg}</span>}
        <br />
        <button type="submit">Login</button>
        <p>
          Don't have an account? <Link to="/register">Register here</Link>
        </p>
      </form>
    </div>
  );
};

export default LoginForm;
