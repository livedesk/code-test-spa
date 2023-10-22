import { useContext, useState } from "react";
import Layout from "./Layout";
import { AppContext } from "../AppContext";
import UserService from "../api/services/UserService";

const Dashboard = () => {
  const { appState, setAppState } = useContext(AppContext);
  const [dataLoaded, setDataLoaded] = useState(false);
  const [data, setData] = useState({
    username: "",
    email: "",
  });

  const fetchDataHandler = () => {
    // check token exists
    if (appState && appState.token) {
      const userService = new UserService();

      // fetch user data, pass stored token
      userService.fetchUserData(appState.token).then((userData) => {
        setData({ ...userData });
        setDataLoaded(true);
      });
    }
  };
  return (
    <>
      <Layout>
        <h1>Dashboard</h1>
        <button onClick={fetchDataHandler}>Fetch Data</button>
        {dataLoaded && (
          <div>
            <p>
              <strong>Fetched data:</strong>
            </p>
            <div className="dialog-form">
              <div className="form-group">Username: {data.username}</div>
              <div className="form-group">Email: {data.email}</div>
            </div>
          </div>
        )}
      </Layout>
    </>
  );
};

export default Dashboard;
