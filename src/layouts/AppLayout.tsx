import {
  AppBar,
  Avatar,
  Box,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

const items = [
  { title: "Project details", to: "" },
  { title: "Upload images", to: "" },
  { title: "Configure smart contract", to: "" },
  { title: "Minting site", to: "" },
  { title: "Deploy for testing", to: "" },
];

const AppLayout = () => {
  const location = useLocation();
  const [anchorEl, setAnchorEl] = useState<HTMLDivElement | null>(null);

  return (
    <Box sx={{ display: "flex" }}>
      <Menu
        anchorEl={anchorEl}
        open={!!anchorEl}
        onClose={() => setAnchorEl(null)}
      >
        <MenuItem
          onClick={async () => {
            try {
              // await signOut();
            } catch (error) {
              console.log(error);
            }
          }}
        >
          Log out
        </MenuItem>
      </Menu>
      <AppBar
        elevation={0}
        position="fixed"
        sx={{
          bgcolor: theme => theme.palette.background.paper,
          color: "inherit",
          borderBottom: 1,
          borderColor: theme => theme.palette.divider,
        }}
      >
        <Toolbar>
          <Typography
            variant="subtitle1"
            noWrap
            component="div"
            sx={{ mr: "auto" }}
          >
            Sweep
          </Typography>
          <ListItemButton
            sx={{ flex: 0 }}
            onClick={event => setAnchorEl(event.currentTarget)}
          >
            <Avatar sx={{ width: 32, height: 32 }} />
            {/* <Typography sx={{ ml: 1 }} noWrap>
              {user?.displayName}
            </Typography> */}
          </ListItemButton>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: 240,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: 240, boxSizing: "border-box" },
          zIndex: theme => theme.zIndex.appBar - 1,
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: "auto" }}>
          <List dense sx={{ px: 1 }}>
            {items.map(({ title, to }) => (
              <ListItemButton
                key={title}
                component={Link}
                to={to}
                selected={location.pathname === to}
                sx={{ borderRadius: 1, my: "2px" }}
              >
                {/* <ListItemIcon sx={{ minWidth: 0, mr: 1 }}>
                  <Icon fontSize="small" />
                </ListItemIcon> */}
                <ListItemText primary={title} />
              </ListItemButton>
            ))}
          </List>
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1 }}>
        <Toolbar />
        <Box sx={{ p: 3 }}>
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};

export default AppLayout;
