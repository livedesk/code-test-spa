import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppProvider } from "./AppContext";

import NoPage from "./components/NoPage";
import "./App.css";
import Dashboard from "./components/Dashboard";
import LoginForm from "./components/Login/LoginForm";
import RegisterForm from "./components/Register/RegisterForm";

export default function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Layout />}> */}
          <Route path="/">
            <Route index element={<LoginForm />} />
            <Route path="register" element={<RegisterForm />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AppProvider>
  );
}
