import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
  Button,
  InputBase,
  Avatar,
  Menu,
  MenuItem,
  ListItemIcon,
  Divider,
} from "@mui/material";
import {
  Menu as MenuIcon,
  Search as SearchIcon,
  AccountCircle as AccountCircleIcon,
  ShoppingCart as ShoppingCartIcon,
} from "@mui/icons-material";
import Logo from "../../assets/logo.png";
import axios from "axios";

const Navbar = ({ profileImage }) => {
  const [anchorMenu, setAnchorMenu] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);

    if (token) {
      setUser(JSON.parse(localStorage.getItem("user")));
    }
  }, []);

  const handleMenuOpen = (event) => setAnchorMenu(event.currentTarget);
  const handleMenuClose = () => setAnchorMenu(null);

  const handleLogout = async () => {
    if (!isLoggedIn) return;

    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        "http://localhost:3001/api/auth/logout",
        {}, // Empty body
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200) {
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        setIsLoggedIn(false);
        setUser({});
        navigate("/login");
      }
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: "#ffffff", color: "#333333", boxShadow: "none" }}
    >
      <Toolbar sx={{ justifyContent: "space-between", alignItems: "center" }}>
        {/* Logo */}
        <Box display="flex" alignItems="center">
          <img src={Logo} alt="Logo" style={{ width: 150, marginRight: 10 }} />
        </Box>

        {/* Search Box */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            minWidth: 200,
            maxWidth: 600,
            flexGrow: 1,
            ml: 2,
          }}
        >
          <InputBase
            placeholder="Search Books / Author / Subject / Publisher"
            sx={{
              ml: 2,
              color: "#333333",
              flexGrow: 1,
              border: "1px solid #1976d2",
              borderRadius: 4,
              padding: "6px 12px",
              backgroundColor: "#f5f5f5",
            }}
          />
          <IconButton
            type="submit"
            sx={{ p: "8px", color: "#1976d2", backgroundColor: "#f5f5f5" }}
            aria-label="search"
          >
            <SearchIcon />
          </IconButton>
        </Box>

        {/* Sell Used Books Button */}
        <Button
          component={Link}
          to="/post-ad"
          variant="contained"
          sx={{
            ml: 2,
            minWidth: 100,
            color: "#ffffff",
            backgroundColor: "#1976d2",
            "&:hover": {
              backgroundColor: "#fff",
            },
          }}
        >
          Sell Used Books
        </Button>

        {/* User Section */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          {isLoggedIn ? (
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Avatar
                alt={user.name}
                src={profileImage || undefined}
                sx={{ ml: 2 }}
              >
                {!profileImage && <AccountCircleIcon />}
              </Avatar>
              <Typography variant="body1" sx={{ ml: 1 }}>
                {`Hi, ${user.name}`}
              </Typography>
            </Box>
          ) : (
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <IconButton
                color="inherit"
                component={Link}
                to="/login"
                sx={{ ml: 2 }}
              >
                <AccountCircleIcon sx={{ color: "#1976d2" }} />
              </IconButton>
              <Typography variant="body2" sx={{ ml: 1 }}>
                My Account
              </Typography>
              <IconButton
                color="inherit"
                component={Link}
                to="/cart"
                sx={{ ml: 2 }}
              >
                <ShoppingCartIcon sx={{ color: "#1976d2" }} />
              </IconButton>
              <Typography variant="body2" sx={{ ml: 1 }}>
                Cart
              </Typography>
            </Box>
          )}
        </Box>

        {/* Menu Icon */}
        <IconButton
          edge="end"
          color="inherit"
          aria-label="menu"
          onClick={handleMenuOpen}
        >
          <MenuIcon sx={{ color: "#1976d2" }} />
        </IconButton>

        {/* Dropdown Menu */}
        <Menu
          anchorEl={anchorMenu}
          open={Boolean(anchorMenu)}
          onClose={handleMenuClose}
          sx={{ mt: 4 }}
        >
          {isLoggedIn ? (
            <MenuItem
              onClick={() => {
                handleMenuClose();
                handleLogout();
              }}
            >
              <ListItemIcon>
                <AccountCircleIcon fontSize="small" />
              </ListItemIcon>
              Logout
            </MenuItem>
          ) : (
            <MenuItem onClick={handleMenuClose} component={Link} to="/login">
              <ListItemIcon>
                <AccountCircleIcon fontSize="small" />
              </ListItemIcon>
              Login/SignUp
            </MenuItem>
          )}
          <Divider />
          {[
            {
              to: "/browse-categories",
              label: "Browse Top Book Categories",
              icon: <SearchIcon fontSize="small" />,
            },
            {
              to: "/my-profile",
              label: "My Profile",
              icon: <AccountCircleIcon fontSize="small" />,
            },
            {
              to: "/my-ads",
              label: "My Ads",
              icon: <AccountCircleIcon fontSize="small" />,
            },
            {
              to: "/my-orders",
              label: "My Orders",
              icon: <ShoppingCartIcon fontSize="small" />,
            },
            {
              to: "/my-selling-orders",
              label: "My Selling Orders",
              icon: <ShoppingCartIcon fontSize="small" />,
            },
            {
              to: "/my-chats",
              label: "My Chats",
              icon: <AccountCircleIcon fontSize="small" />,
            },
            {
              to: "/cart",
              label: "Cart",
              icon: <ShoppingCartIcon fontSize="small" />,
            },
            {
              to: "/wishlist",
              label: "Wishlist",
              icon: <ShoppingCartIcon fontSize="small" />,
            },
            {
              to: "/how-it-works",
              label: "How it Works?",
              icon: <MenuIcon fontSize="small" />,
            },
          ].map((item, index) => (
            <MenuItem
              key={index}
              onClick={handleMenuClose}
              component={Link}
              to={item.to}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              {item.label}
            </MenuItem>
          ))}
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
