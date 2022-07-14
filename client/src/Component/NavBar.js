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
} from "@mui/material";

// add responsiveness to navbar to have menu bar

export default function NavBar({
   user,
   handleSignOut,
   handleProfilePage,
   onHandleSearch,
   jobPostings,
}) {
   const handleChangeSearch = (e) => onHandleSearch(e.target.value);

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
                        to={user ? "/findjobs" : "/"}
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

               <form
                  onChange={handleChangeSearch}
                  // onSubmit={handleSubmitSearch}
               >
                  <Box
                     display={"flex"}
                     columnGap={"10px"}
                     alignItems={"center"}
                     justifyContent={"center"}
                  >
                     <Box sx={{ width: "50vw" }}>
                        <Box />
                        <Autocomplete
                           freeSolo
                           id="free-solo"
                           disableClearable
                           options={jobPostings.map((job) => job.position)}
                           renderInput={(params) => (
                              <TextField
                                 // onChange={handleChangeSearch}
                                 {...params}
                                 label="...fetch your dream job"
                                 InputProps={{
                                    ...params.InputProps,
                                    type: "search",
                                 }}
                                 fullWidth
                                 size="small"
                                 id="filled-search"
                                 name="position"
                                 variant="outlined"
                                 sx={{ margin: "auto" }}
                              />
                           )}
                        />
                     </Box>
                     <Box>
                        <Button
                           disableElevation
                           variant="contained"
                           size="small"
                           type="submit"
                        >
                           Fetch jobs
                        </Button>
                     </Box>
                  </Box>
               </form>
            </AppBar>
         </Stack>
         <Divider fullWidth />
      </>
   );
}
