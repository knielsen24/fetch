import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import {
   AppBar,
   Typography,
   Stack,
   TextField,
   Divider,
   Link,
   Box,
   Menu,
   MenuItem,
} from "@mui/material";

export default function NavBar({ user, handleSignOut, handleProfilePage }) {
   const [search, setSearch] = useState("");
   const [anchorEl, setAnchorEl] = useState(null);

   const open = Boolean(anchorEl);

   const handleClick = (e) => {
      setAnchorEl(e.currentTarget);
   };
   const handleClose = () => setAnchorEl(false);

   const changeHandler = (e) => {
      const name = e.target.name;
      const value = e.target.value;

      setSearch({ [name]: value });
   };

   const submitHandler = (e) => {
      e.preventDefault();
      fetch("http://localhost:3000");
   };

   const capFirstLetter = (firstName) =>
      firstName[0].toUpperCase() + firstName.slice(1);

   // when the user is signed in it renders dropDownMenu
   // when the user is signed out it renders signInLink
   const dropDownMenu = (
      <>
         <Link
            underline="hover"
            color={"black"}
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
         >
            {user ? capFirstLetter(user.first_name) : null}
         </Link>
         <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
               "aria-labelledby": "basic-button",
            }}
         >
            <MenuItem
               component={RouterLink}
               to="/profile"
               onClick={() => {
                  handleClose();
                  handleProfilePage();
               }}
            >
               Profile
            </MenuItem>
            <MenuItem
               component={RouterLink}
               to="/myjobs"
               onClick={() => {
                  handleClose();
               }}
            >
               My Jobs
            </MenuItem>
            <MenuItem
               component={RouterLink}
               to="/myreviews"
               onClick={() => {
                  handleClose();
               }}
            >
               My Reviews
            </MenuItem>
            {/* <MenuItem component={RouterLink} to="/settings">Settings</MenuItem> */}
            {/* css needs polishing */}
            <Divider fullWidth />
            <MenuItem
               onClick={() => {
                  handleSignOut();
                  handleClose();
               }}
            >
               Sign Out
            </MenuItem>
         </Menu>
      </>
   );

   const signInLink = (
      <Link
         component={RouterLink}
         to="/signin"
         underline="hover"
         color={"black"}
         aria-controls={open ? "basic-menu" : undefined}
         aria-haspopup="true"
         aria-expanded={open ? "true" : undefined}
         onClick={handleClick}
      >
         Sign In
      </Link>
   );

   return (
      <>
         <Stack direction={"column"} spacing={3}>
            <AppBar elevation={0} position="static" color="">
               <Stack
                  direction={"row"}
                  alignItems={"center"}
                  justifyContent={"space-between"}
                  marginTop={2}
               >
                  <Stack direction={"row"} spacing={4} alignItems={"center"}>
                     {/* div... has a purpose */}
                     <div></div>
                     <Link
                        component={RouterLink}
                        to="/"
                        underline="never"
                        fontFamily={"sans-serif"}
                        color={"primary"}
                        fontSize={36}
                        sx={{ textDecoration: "none" }}
                     >
                        fetch
                     </Link>
                     <Link
                        component={RouterLink}
                        to="/findjobs"
                        underline="hover"
                        color={"black"}
                     >
                        Find Jobs
                     </Link>
                     <Link component="button" underline="hover" color={"black"}>
                        Company Reviews
                     </Link>
                     <Link component="button" underline="hover" color={"black"}>
                        Find Salaries
                     </Link>
                  </Stack>
                  <Stack direction={"row"} spacing={2} sx={{ mr: 2 }}>
                     {/* conditional render on user state */}
                     {user ? dropDownMenu : signInLink}
                     <Divider orientation="vertical" />
                     <Link component="button" underline="hover" color={"black"}>
                        Employers / Post Jobs
                     </Link>
                  </Stack>
               </Stack>
               <Divider fullWidth />
               <Stack
                  direction={"row"}
                  spacing={36}
                  alignItems={"center"}
                  justifyContent={"space-between"}
               >
                  <Box sx={{ mt: 7 }} />
                  <TextField
                     onChange={changeHandler}
                     onSubmit={submitHandler}
                     fullWidth
                     size="small"
                     id="filled-search"
                     label="...snag your dream job"
                     type="search"
                     name="search"
                     variant="outlined"
                  />
                  <Box />
               </Stack>
            </AppBar>
         </Stack>
         <Divider fullWidth />
      </>
   );
}
