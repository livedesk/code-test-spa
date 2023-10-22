import { useContext, useEffect } from "react";
import { AppContext } from "../AppContext";
import { Link, useNavigate } from "react-router-dom";

const Layout = ({ children }) => {
  const { appState, setAppState } = useContext(AppContext);

  const navigate = useNavigate();

  // check user is authenticated (token exists), if not, redirect to login
  useEffect(() => {
    if (appState) {
      // guard no token
      if (appState.token === "") {
        navigate("/");
      }
    }
  }, [appState]);

  return (
    <>
      <div className="header">
        <nav>
          <ul>
            <li>
              Welcome {appState.user}&nbsp;&nbsp;-&nbsp;&nbsp;
              <Link to="/">Logout</Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className="container">{children}</div>
    </>
  );
};

export default Layout;
