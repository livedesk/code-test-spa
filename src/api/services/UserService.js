import { BaseAPIURL } from "../constants";

class UserService {
  constructor() {}

  async login(data) {
    try {
      const response = await fetch(`${BaseAPIURL}/user/login`, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(data),
      });

      if (response.status === 401) {
        return null;
      }

      const responseData = await response.json();
      return responseData;
    } catch (error) {
      console.error("An error occurred:", error);
      throw error; // You can handle the error in your component
    }
  }

  async register(data) {
    try {
      const response = await fetch(`${BaseAPIURL}/user/register`, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(data),
      });

      if (response.status === 400) {
        return null;
      }

      const responseData = await response.json();
      return responseData;
    } catch (error) {
      console.error("An error occurred:", error);
      throw error; // You can handle the error in your component
    }
  }

  async fetchUserData(token) {
    try {
      const headers = new Headers({
        Authorization: `Bearer ${token}`,
      });

      const response = await fetch(`${BaseAPIURL}/user`, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "GET",
        headers: headers,
      });

      if (response.status === 400) {
        return null;
      }

      const responseData = await response.json();

      return responseData;
    } catch (error) {
      console.error("An error occurred:", error);
      throw error; // You can handle the error in your component
    }
  }
}

export default UserService;
