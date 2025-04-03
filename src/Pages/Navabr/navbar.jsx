import * as React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";

const pages = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "FAQ", path: "/Faq" },
  { name: "Contact", path: "/contact" },
];

const settings = [
  {name:"Sign In", path: "/signin" },
  // { name: "Profile", path: "/profile" },
  { name: "Your Quizzes", path: "/quizzes" },
  { name: "Dashboard", path: "/dashboard" },
  { name: "Logout", path: "/logout" },
];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: "black", boxShadow: "none" }}
    >
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          {/* Centered Menu for Large Screens */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              flexGrow: 1,
              justifyContent: "center",
            }}
          >
            {pages.map((page) => (
              <Button
                key={page.name}
                component={Link} // Use Link for navigation
                to={page.path}
                sx={{
                  mx: 2,
                  fontSize: "18px",
                  color: "#FFD700",
                  fontWeight: "bold",
                  transition: "0.3s",
                  "&:hover": {
                    textShadow: "0px 0px 10px #40e0d0",
                  },
                }}
              >
                {page.name}
              </Button>
            ))}
          </Box>

          {/* Mobile Menu (Hamburger) */}
          <Box
            sx={{
              display: { xs: "flex", md: "none" },
              justifyContent: "flex-start",
              flexGrow: 1,
            }}
          >
            <IconButton
              size="large"
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              sx={{ color: "white" }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
              keepMounted
              transformOrigin={{ vertical: "top", horizontal: "left" }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page.name}
                  onClick={handleCloseNavMenu}
                  component={Link}
                  to={page.path}
                >
                  <Typography sx={{ textAlign: "center", color: "#ff0000" }}>
                    {page.name}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* User Profile */}
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="User Avatar" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{ vertical: "top", horizontal: "right" }}
              keepMounted
              transformOrigin={{ vertical: "top", horizontal: "right" }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem
                  key={setting.name}
                  onClick={handleCloseUserMenu}
                  component={Link}
                  to={setting.path}
                >
                  <Typography
                    sx={{
                      fontSize: "16px",
                      textAlign: "center",
                      color: "#ff0000",
                    }}
                  >
                    {setting.name}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
