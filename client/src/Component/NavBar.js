import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import NavBarUserDropDown from "./NavBarUserDropDown";
import {
   AppBar,
   Stack,
   TextField,
   Divider,
   Link,
   Box,
   Autocomplete,
   Button,
   IconButton,
   Typography,
   Menu,
   MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import NavBarSearch from "./NavBarSearch";

export default function NavBar({
   user,
   handleSignOut,
   handleProfilePage,
   onHandleSearch,
   jobPostings,
}) {
   // const handleChangeSearch = (e) => onHandleSearch(e.target.value);
   const pages = [
      "Find Jobs",
      "Company Reviews",
      "Find Salaries",
      "Employers / Post Jobs",
   ];

   const [anchorElNav, setAnchorElNav] = useState(null);
   const handleOpenNavMenu = (event) => setAnchorElNav(event.currentTarget);
   const handleCloseNavMenu = () => setAnchorElNav(null);

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
                     <Box
                        sx={{
                           flexGrow: 1,
                           display: { xs: "flex", md: "none" },
                        }}
                     >
                        <IconButton
                           size="large"
                           aria-label="account of current user"
                           aria-controls="menu-appbar"
                           aria-haspopup="true"
                           onClick={handleOpenNavMenu}
                           color="inherit"
                        >
                           <MenuIcon />
                        </IconButton>
                        <Menu
                           id="menu-appbar"
                           anchorEl={anchorElNav}
                           anchorOrigin={{
                              vertical: "bottom",
                              horizontal: "left",
                           }}
                           keepMounted
                           transformOrigin={{
                              vertical: "top",
                              horizontal: "left",
                           }}
                           open={Boolean(anchorElNav)}
                           onClose={handleCloseNavMenu}
                           sx={{
                              display: { xs: "block", md: "none" },
                           }}
                        >
                           <MenuItem onClick={handleCloseNavMenu}>
                              <Link
                                 component={RouterLink}
                                 to="/findjobs"
                                 underline="hover"
                                 color={"black"}
                              >
                                 <Typography textAlign="center">
                                    Find Jobs
                                 </Typography>
                              </Link>
                           </MenuItem>
                           <MenuItem onClick={handleCloseNavMenu}>
                              <Link
                                 component="button"
                                 underline="hover"
                                 color={"black"}
                              >
                                 <Typography textAlign="center">
                                    Company Reviews
                                 </Typography>
                              </Link>
                           </MenuItem>
                           <MenuItem onClick={handleCloseNavMenu}>
                              <Link
                                 component="button"
                                 underline="hover"
                                 color={"black"}
                              >
                                 <Typography textAlign="center">
                                    Find Salaries
                                 </Typography>
                              </Link>
                           </MenuItem>
                        </Menu>
                     </Box>
                     <Link
                        component={RouterLink}
                        to={user ? "/findjobs" : "/"}
                        underline="never"
                        fontFamily={"sans-serif"}
                        color={"primary"}
                        fontSize={36}
                        sx={{ textDecoration: "none" }}
                     >
                        fetch
                     </Link>
                     <Box
                        sx={{
                           flexGrow: 1,
                           display: { xs: "none", md: "flex" },
                        }}
                     >
                        <Link
                           component={RouterLink}
                           to="/findjobs"
                           underline="hover"
                           color={"black"}
                        >
                           Find Jobs
                        </Link>
                        <Link
                           component="button"
                           underline="hover"
                           color={"black"}
                        >
                           Company Reviews
                        </Link>
                        <Link
                           component="button"
                           underline="hover"
                           color={"black"}
                        >
                           Find Salaries
                        </Link>
                     </Box>
                  </Stack>
                  <Stack direction={"row"} spacing={2} sx={{ mr: 2 }}>
                     <NavBarUserDropDown
                        user={user}
                        handleProfilePage={handleProfilePage}
                        handleSignOut={handleSignOut}
                     />
                     <Divider orientation="vertical" />
                     <Link component="button" underline="hover" color={"black"}>
                        Employers / Post Jobs
                     </Link>
                  </Stack>
               </Stack>
               <Divider fullWidth />
               <NavBarSearch
                  jobPostings={jobPostings}
                  onHandleSearch={onHandleSearch}
               />
            </AppBar>
         </Stack>
         <Divider fullWidth />
      </>
   );
}
