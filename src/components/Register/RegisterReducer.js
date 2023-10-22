export const initialState = {
  username: "",
  email: "",
  password: "",
  isFormValid: false,
};

export const formReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_USERNAME":
      const newUsername = action.payload.trim();
      const isUsernameValid = newUsername.trim().length > 0;
      return {
        ...state,
        username: newUsername,
        isFormValid:
          isUsernameValid &&
          state.password.trim().length > 0 &&
          state.email.trim().length > 0,
      };
    case "UPDATE_EMAIL":
      const newEmail = action.payload.trim();
      const isEmailValid = true; // could implement email validation regex
      return {
        ...state,
        email: newEmail,
        isFormValid:
          isEmailValid &&
          state.password.trim().length > 0 &&
          state.username.trim().length > 0,
      };
    case "UPDATE_PASSWORD":
      const newPassword = action.payload.trim();
      const isPasswordValid = newPassword.trim().length >= 3;
      return {
        ...state,
        password: newPassword,
        isFormValid:
          isPasswordValid &&
          state.username.trim().length > 0 &&
          state.email.trim().length > 0,
      };

    default:
      return state;
  }
};
