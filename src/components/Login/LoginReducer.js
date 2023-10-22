// Initial state
export const initialState = {
  username: "",
  password: "",
  isFormValid: false, // just a basic form validation
  // could extend for better form validation...
};

// Reducer function
export const formReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_USERNAME":
      const newUsername = action.payload.trim();
      const isFormValid =
        newUsername.length > 0 && state.password.trim().length > 0;
      return { ...state, username: newUsername, isFormValid };
    case "UPDATE_PASSWORD":
      const newPassword = action.payload.trim();
      const isFormValidWithPassword =
        state.username.trim().length > 0 && newPassword.length > 0;
      return {
        ...state,
        password: newPassword,
        isFormValid: isFormValidWithPassword,
      };
    default:
      return state;
  }
};
