import React, { useState } from "react";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PeopleIcon from "@mui/icons-material/People";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import "../assets/styles/NavBar.css";

const Bar = () => {
  const location = useLocation();
  const [value, setValue] = useState(location.pathname);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => setValue(newValue)}
      showLabels
      className="bottom-navigation"
    >
      <BottomNavigationAction
        label="Home"
        icon={<HomeIcon />}
        component={Link}
        to="/"
        value="/"
      />
      <BottomNavigationAction
        label="Cart"
        icon={<ShoppingCartIcon />}
        component={Link}
        to="/cart"
        value="/cart"
      />
      <BottomNavigationAction
        label="Community"
        icon={<PeopleIcon />}
        component={Link}
        to="/community"
        value="/community"
      />
      <BottomNavigationAction
        label="Account"
        icon={<AccountCircleIcon />}
        component={Link}
        to="/account"
        value="/account"
      />
    </BottomNavigation>
  );
};

export default Bar;
