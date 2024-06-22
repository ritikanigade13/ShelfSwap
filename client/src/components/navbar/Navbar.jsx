import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box display="flex" alignItems="center">
          <img src={Logo} alt="Logo" style={{ width: 150}} />
        </Box>
        <Box sx={{ display: "flex", gap: 2 }}>
          <Button sx={{ color: "#fff" }}>Home</Button>
          <Button sx={{ color: "#fff" }}>Browse</Button>
          <Button sx={{ color: "#fff" }}>Sell</Button>
          <Button sx={{ color: "#fff" }}>About</Button>
          <Button sx={{ color: "#fff" }}>Contact</Button>
          <Button sx={{ color: "#fff" }}>Login</Button>
        </Box>
        <IconButton edge="end" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
