import { LoginOutlined, PersonPinCircleOutlined } from "@mui/icons-material";
import { Button, Menu, MenuItem, MenuProps } from "@mui/material";
import { useState } from "react";

const MuiMenuItem = () => {
  const [anchorEl, setAnchorEl] = useState<any>(false);
  return (
    <>
      <Button onClick={(e) => setAnchorEl(!anchorEl)}>Open menu</Button>
      <Menu
        id="user-menu"
        open={anchorEl}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        sx={{
          "& svg": {
            mr: 2,
          },
        }}
      >
        <MenuItem>
          <PersonPinCircleOutlined />
          Éditer votre profil
        </MenuItem>
        <MenuItem>
          <LoginOutlined />
          Déconnexion
        </MenuItem>
      </Menu>
    </>
  );
};

export default MuiMenuItem;
