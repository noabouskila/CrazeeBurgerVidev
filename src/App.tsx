// import React from "react";
import {  Routes ,Route , Navigate} from "react-router-dom";
import "./App.css";
import LoginPage from "./components/pages/login/LoginPage";
import OrderPage from "./components/pages/order/Order-Page";
import ErrorPage from "./components/pages/error/ErrorPage";




function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/orderPage" element={<OrderPage />} />

      {/* Redirection automatique si l'utilisateur écrit /order */}
      <Route path="/order" element={<Navigate to="/orderPage" replace />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
  
}

export default App;
