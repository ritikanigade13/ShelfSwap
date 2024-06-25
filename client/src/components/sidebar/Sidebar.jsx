import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
  Divider,
  Box,
} from "@mui/material";
import {
  Search as SearchIcon,
  AccountCircle as AccountCircleIcon,
  ShoppingCart as ShoppingCartIcon,
  Menu as MenuIcon,
  Logout as LogoutIcon,
} from "@mui/icons-material";

const Sidebar = ({ isLoggedIn, handleLogout }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = (open) => () => {
    setIsOpen(open);
  };

  const menuItems = [
    {
      to: "/browse-categories",
      label: "Browse Categories",
      icon: <SearchIcon />,
    },
    {
      to: "/my-profile",
      label: "My Profile",
      icon: <AccountCircleIcon />,
    },
    {
      to: "/my-ads",
      label: "My Ads",
      icon: <AccountCircleIcon />,
    },
    {
      to: "/my-orders",
      label: "My Orders",
      icon: <ShoppingCartIcon />,
    },
    {
      to: "/my-selling-orders",
      label: "My Selling Orders",
      icon: <ShoppingCartIcon />,
    },
    {
      to: "/my-chats",
      label: "My Chats",
      icon: <AccountCircleIcon />,
    },
    {
      to: "/cart",
      label: "Cart",
      icon: <ShoppingCartIcon />,
    },
    {
      to: "/wishlist",
      label: "Wishlist",
      icon: <ShoppingCartIcon />,
    },
    {
      to: "/how-it-works",
      label: "How it Works?",
      icon: <MenuIcon />,
    },
  ];

  return (
    <Box>
      <IconButton
        onClick={toggleDrawer(true)}
        sx={{ color: "#1976d2", position: "fixed", top: 16, left: 16 }}
      >
        <MenuIcon />
      </IconButton>
      <Drawer anchor="left" open={isOpen} onClose={toggleDrawer(false)}>
        <Box
          sx={{
            width: isOpen ? 250 : 70,
            overflowX: "hidden",
            transition: "width 0.3s",
          }}
        >
          <IconButton
            onClick={toggleDrawer(false)}
            sx={{ color: "#1976d2", margin: "8px" }}
          >
            <MenuIcon />
          </IconButton>
          <Divider />
          <List>
            {isLoggedIn ? (
              <ListItem button onClick={handleLogout}>
                <ListItemIcon>
                  <LogoutIcon />
                </ListItemIcon>
                {isOpen && <ListItemText primary="Logout" />}
              </ListItem>
            ) : (
              <ListItem button component={Link} to="/login">
                <ListItemIcon>
                  <AccountCircleIcon />
                </ListItemIcon>
                {isOpen && <ListItemText primary="Login/SignUp" />}
              </ListItem>
            )}
            <Divider />
            {menuItems.map((item, index) => (
              <ListItem button component={Link} to={item.to} key={index}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                {isOpen && <ListItemText primary={item.label} />}
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </Box>
  );
};

export default Sidebar;
