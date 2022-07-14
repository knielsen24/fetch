import React, { useState } from "react";
import { TextField, Box, Autocomplete, Button } from "@mui/material";

function NavBarSearch({ jobPostings, onHandleSearch, onSearchClick }) {
   const handleChangeSearch = (e) => {
      console.log(e.target.value);
      onHandleSearch(e.target.value);
   };

   // add state hear from search back
   // have handleClick in App grab value of state from here
   return (
      <>
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
                        onChange={handleChangeSearch}
                     />
                  )}
               />
            </Box>
            <Box>
               <Button
                  disableElevation
                  variant="contained"
                  size="small"
                  onClick={(e)=>onSearchClick(e.target.value)}
               >
                  Fetch jobs
               </Button>
            </Box>
         </Box>
      </>
   );
}

export default NavBarSearch;
