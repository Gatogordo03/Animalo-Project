import React, { useContext } from "react";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PeopleIcon from "@mui/icons-material/People";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Badge from "@mui/material/Badge";
import { CartContext } from "../context/CartContext";
import "../assets/styles/Bar.css";

const Bar = () => {
  const { cart } = useContext(CartContext);

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <BottomNavigation showLabels className="bottom-navigation">
      <BottomNavigationAction
        label="Home"
        icon={<HomeIcon />}
        component={Link}
        to="/"
      />
      <BottomNavigationAction
        label="Cart"
        icon={
          <Badge badgeContent={totalItems} color="secondary">
            <ShoppingCartIcon />
          </Badge>
        }
        component={Link}
        to="/cart"
      />
      <BottomNavigationAction
        label="Community"
        icon={<PeopleIcon />}
        component={Link}
        to="/community"
      />
      <BottomNavigationAction
        label="Account"
        icon={<AccountCircleIcon />}
        component={Link}
        to="/account"
      />
    </BottomNavigation>
  );
};

export default Bar;
