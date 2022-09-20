import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import React from "react";
import { CustomeDialog } from "../CustomeDialog";
import { dialogOpenSubject$ } from "../CustomeDialog/CustomeDialog";
import { FavoriteTable } from "./FavoriteTable";

export interface NavbarInterface {}

const Navbar: React.FC<NavbarInterface> = () => {
  const handleClick = () => {
    dialogOpenSubject$.setSubject = true;
  };
  return (
    <>
      <CustomeDialog>
        <FavoriteTable />
      </CustomeDialog>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Button variant="contained" onClick={handleClick}>
            Open Favorites
          </Button>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
