import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { navigateToUrl } from "single-spa";

export default function Header() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleNavigate = (url) => {
    handleMenuClose();
    navigateToUrl(url);
  };

  return (
    <AppBar position="static" sx={{ marginBottom: 1 }}>
      <Toolbar>
        {/* Menu Button */}
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={handleMenuOpen}
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>

        {/* Dropdown Menu */}
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
          <MenuItem onClick={() => handleNavigate("/")}>Home</MenuItem>
          <MenuItem onClick={() => handleNavigate("/#/another-react-app")}>
            Another React App
          </MenuItem>
        </Menu>

        {/* App title */}
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Microfrontend Header Built Using React
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
