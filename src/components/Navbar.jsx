import {
  AppBar,
  Avatar,
  Badge,
  Box,
  Menu,
  MenuItem,
  InputBase,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";

import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";

import { useState } from "react";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: theme.spacing(0, 1),
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));

const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  gap: "20px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

const UserBox = styled(Box)((theme) => ({
  display: "none",
  gap: "10px",
  alignItems: "center",
  // [theme.breakpoints.up("sm")]: {
  //   display: "flex",
  // },
}));

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          OlamSocial
        </Typography>
        <ConnectWithoutContactIcon
          sx={{ display: { xs: "block", sm: "none" } }}
        />
        <Search>
          <InputBase placeholder="Search OlamSocial" />
        </Search>
        <Icons>
          <Badge badgeContent={6} color="error">
            <MailIcon />
          </Badge>
          <Badge badgeContent={4} color="error">
            <NotificationsIcon />
          </Badge>
          <Avatar
            sx={{ width: 30, height: 30 }}
            alt="Proteen Das"
            src="https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            onClick={(e) => setOpen(true)}
          />
        </Icons>
        <UserBox sx={{ display: { xs: "flex", sm: "none" } }}>
          <Avatar
            sx={{ width: 30, height: 30 }}
            alt="Proteen Das"
            src="https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            onClick={(e) => setOpen(true)}
          />
          <Typography variant="span">Proteen</Typography>
        </UserBox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e) => setOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};
