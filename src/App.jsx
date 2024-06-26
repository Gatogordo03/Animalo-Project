import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Community from "./pages/Community";
import Account from "./pages/Account";
import Bar from "./components/Bar";
import "./assets/styles/App.css";

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/community" element={<Community />} />
          <Route path="/account" element={<Account />} />
        </Routes>
        <Bar />
      </div>
    </Router>
  );
};

export default App;
