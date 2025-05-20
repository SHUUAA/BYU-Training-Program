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

// Styled search input
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
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
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
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

const TopNavbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [expandedItem, setExpandedItem] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleExpandClick = (item) => {
    setExpandedItem(expandedItem === item ? null : item);
  };

  const navItems = [
    { name: "Home", href: "#" },
    {
      name: "Courses",
      href: "#",
      submenu: [
        { name: "Data Science", href: "#" },
        { name: "Programming", href: "#" },
        { name: "Security", href: "#" },
        { name: "Machine Learning", href: "#" },
        { name: "Database", href: "#" },
      ],
    },
    { name: "Resources", href: "#" },
    { name: "Community", href: "#" },
    { name: "About", href: "#" },
  ];

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        TechLearn
      </Typography>
      <List>
        {navItems.map((item) => (
          <Box key={item.name}>
            <ListItem disablePadding>
              <ListItemButton
                onClick={
                  item.submenu ? () => handleExpandClick(item.name) : null
                }
                sx={{ textAlign: "left" }}
              >
                <ListItemText primary={item.name} />
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
                    <ListItemButton key={subitem.name} sx={{ pl: 4 }}>
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
      <AppBar position="static">
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
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            TechLearn
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {navItems.map((item) => (
              <Box key={item.name} sx={{ position: "relative" }}>
                <Button
                  color="inherit"
                  aria-owns={anchorEl ? "menu-list-grow" : undefined}
                  aria-haspopup={item.submenu ? "true" : "false"}
                  onClick={item.submenu ? handleMenuOpen : null}
                  endIcon={item.submenu ? <ChevronDownIcon /> : null}
                >
                  {item.name}
                </Button>
                {item.submenu && (
                  <Menu
                    id="menu-list-grow"
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleMenuClose}
                    MenuListProps={{
                      "aria-labelledby": "basic-button",
                    }}
                  >
                    {item.submenu.map((subitem) => (
                      <MenuItem key={subitem.name} onClick={handleMenuClose}>
                        {subitem.name}
                      </MenuItem>
                    ))}
                  </Menu>
                )}
              </Box>
            ))}
          </Box>

          <Search sx={{ display: { xs: "none", md: "block" } }}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search courses..."
              inputProps={{ "aria-label": "search" }}
            />
          </Search>

          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <IconButton color="inherit">
              <BellIcon />
            </IconButton>
            <IconButton color="inherit">
              <UserIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile
        }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: 240 },
        }}
      >
        {drawer}
      </Drawer>
    </Box>
  );
};

export default TopNavbar;
