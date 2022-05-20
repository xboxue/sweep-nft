import {
  Avatar,
  Box,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

const items = [
  { title: "Project details", to: "/details" },
  { title: "Upload images", to: "/upload" },
  { title: "Configure smart contract", to: "/smart-contract" },
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
      <Drawer
        variant="permanent"
        sx={{
          width: 240,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: 240, boxSizing: "border-box" },
        }}
      >
        <Box sx={{ overflow: "auto", px: 1, py: 2 }}>
          <ListItemButton
            onClick={event => setAnchorEl(event.currentTarget)}
            sx={{ borderRadius: 1 }}
          >
            <Avatar
              sx={{ width: 24, height: 24, mr: 1 }}
              src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTAwcHgiIGhlaWdodD0iMTAwcHgiIHZpZXdCb3g9IjAgMCA4MCA4MCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KICA8ZGVmcz4KICAgIDxsaW5lYXJHcmFkaWVudCB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIiBpZD0iMTEzNDQ5NDQzOTU4Ij4KICAgICAgPHN0b3Agc3RvcC1jb2xvcj0icmdiKDAsIDI1NSwgMjAwKSIgb2Zmc2V0PSIwJSI+PC9zdG9wPgogICAgICA8c3RvcCBzdG9wLWNvbG9yPSJyZ2IoMjAwLCAwLCAyNTUpIiBvZmZzZXQ9IjEwMCUiPjwvc3RvcD4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgPC9kZWZzPgogIDxnIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgPHJlY3QgaWQ9IlJlY3RhbmdsZSIgZmlsbD0idXJsKCMxMTM0NDk0NDM5NTgpIiB4PSIwIiB5PSIwIiB3aWR0aD0iODAiIGhlaWdodD0iODAiPjwvcmVjdD4KICA8L2c+Cjwvc3ZnPg=="
              alt="icon"
            />
            <Typography variant="subtitle2">Sweep</Typography>
          </ListItemButton>
          <List dense>
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
      <Box
        component="main"
        sx={{ flexGrow: 1, maxWidth: 640, mx: "auto", mt: 5, mb: 8 }}
      >
        <Outlet />
      </Box>
    </Box>
  );
};

export default AppLayout;
