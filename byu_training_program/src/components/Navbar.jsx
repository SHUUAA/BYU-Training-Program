import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Menu,
  MenuItem,
  InputBase,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  Collapse,
} from "@mui/material";
import {
  Menu as MenuIcon,
  Search as SearchIcon,
  Person as UserIcon,
  Notifications as BellIcon,
  ExpandMore as ChevronDownIcon,
  ExpandLess as ChevronUpIcon,
} from "@mui/icons-material";
import { styled, alpha } from "@mui/material/styles";

// Define our custom color
const mainColor = "#133020"; // Dark forest green
const textColor = "#ffffff"; // White text for contrast against dark background

// Styled search input
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(textColor, 0.15),
  "&:hover": {
    backgroundColor: alpha(textColor, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: textColor,
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: textColor,
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

// Custom styled AppBar
const CustomAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: mainColor,
  color: textColor,
  boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
}));

const TopNavbar = ({ setActivePage }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [expandedItem, setExpandedItem] = useState(null);
  const [activeMenu, setActiveMenu] = useState(null);

  const handleMenuOpen = (event, menuName) => {
    setAnchorEl(event.currentTarget);
    setActiveMenu(menuName);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setActiveMenu(null);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleExpandClick = (item) => {
    setExpandedItem(expandedItem === item ? null : item);
  };

  // New function to handle navigation
  const handleNavigation = (page) => {
    setActivePage(page);
    handleMenuClose();
    setMobileOpen(false);
  };

  const navItems = [
    { name: "Home", href: "#", page: "home" },
    {
      name: "Courses",
      href: "#",
      page: "courses",
      submenu: [
        { name: "Data Science", href: "#", page: "courses" },
        { name: "Programming", href: "#", page: "courses" },
        { name: "Security", href: "#", page: "courses" },
        { name: "Machine Learning", href: "#", page: "courses" },
        { name: "Database", href: "#", page: "courses" },
      ],
    },
    { name: "Resources", href: "#", page: "resources" },
    { name: "Community", href: "#", page: "community" },
    { name: "About", href: "#", page: "about" },
  ];

  const drawer = (
    <Box
      sx={{
        textAlign: "center",
        backgroundColor: mainColor,
        color: textColor,
        height: "100%",
      }}
    >
      <Typography variant="h6" sx={{ my: 2, fontWeight: "bold" }}>
        BYU Training
      </Typography>
      <List>
        {navItems.map((item) => (
          <Box key={item.name}>
            <ListItem disablePadding>
              <ListItemButton
                onClick={
                  item.submenu
                    ? () => handleExpandClick(item.name)
                    : () => handleNavigation(item.page)
                }
                sx={{
                  textAlign: "left",
                  "&:hover": {
                    backgroundColor: alpha(textColor, 0.1),
                  },
                }}
              >
                <ListItemText
                  primary={item.name}
                  primaryTypographyProps={{
                    fontWeight: expandedItem === item.name ? "bold" : "normal",
                  }}
                />
                {item.submenu &&
                  (expandedItem === item.name ? (
                    <ChevronUpIcon />
                  ) : (
                    <ChevronDownIcon />
                  ))}
              </ListItemButton>
            </ListItem>
            {item.submenu && (
              <Collapse
                in={expandedItem === item.name}
                timeout="auto"
                unmountOnExit
              >
                <List component="div" disablePadding>
                  {item.submenu.map((subitem) => (
                    <ListItemButton
                      key={subitem.name}
                      onClick={() => handleNavigation(subitem.page)}
                      sx={{
                        pl: 4,
                        "&:hover": {
                          backgroundColor: alpha(textColor, 0.1),
                        },
                      }}
                    >
                      <ListItemText primary={subitem.name} />
                    </ListItemButton>
                  ))}
                </List>
              </Collapse>
            )}
          </Box>
        ))}
      </List>
      <Search sx={{ mx: 2, my: 1 }}>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search courses..."
          inputProps={{ "aria-label": "search" }}
        />
      </Search>
    </Box>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <CustomAppBar position="static">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              display: { xs: "none", sm: "block" },
              fontWeight: "bold",
              cursor: "pointer",
              flexGrow: 1,
            }}
            onClick={() => handleNavigation("home")}
          >
            BYU Training
          </Typography>

          <Box sx={{ display: { xs: "none", md: "flex" }, ml: 4 }}>
            {navItems.map((item) => (
              <Box key={item.name} sx={{ position: "relative" }}>
                <Button
                  color="inherit"
                  aria-owns={
                    activeMenu === item.name ? "menu-list-grow" : undefined
                  }
                  aria-haspopup={item.submenu ? "true" : "false"}
                  onClick={
                    item.submenu
                      ? (e) => handleMenuOpen(e, item.name)
                      : () => handleNavigation(item.page)
                  }
                  endIcon={item.submenu ? <ChevronDownIcon /> : null}
                  sx={{
                    mx: 0.5,
                    fontWeight: activeMenu === item.name ? "bold" : "normal",
                    "&:hover": {
                      backgroundColor: alpha(textColor, 0.1),
                    },
                  }}
                >
                  {item.name}
                </Button>
                {item.submenu && (
                  <Menu
                    id="menu-list-grow"
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl) && activeMenu === item.name}
                    onClose={handleMenuClose}
                    MenuListProps={{
                      "aria-labelledby": "basic-button",
                    }}
                    PaperProps={{
                      sx: {
                        backgroundColor: mainColor,
                        color: textColor,
                        mt: 0.5,
                        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.3)",
                      },
                    }}
                  >
                    {item.submenu.map((subitem) => (
                      <MenuItem
                        key={subitem.name}
                        onClick={() => handleNavigation(subitem.page)}
                        sx={{
                          "&:hover": {
                            backgroundColor: alpha(textColor, 0.1),
                          },
                        }}
                      >
                        {subitem.name}
                      </MenuItem>
                    ))}
                  </Menu>
                )}
              </Box>
            ))}
          </Box>
        </Toolbar>
      </CustomAppBar>

      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile
        }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: 240,
            backgroundColor: mainColor,
            color: textColor,
          },
        }}
      >
        {drawer}
      </Drawer>
    </Box>
  );
};

export default TopNavbar;
