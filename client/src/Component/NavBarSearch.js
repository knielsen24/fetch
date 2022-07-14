import React, { useState } from "react";
import { TextField, Box, Autocomplete, Button } from "@mui/material";

function NavBarSearch({ jobPostings, onHandleSearch }) {
   const [value, setValue] = useState("");

   // console.log(value)
   //We need the value from the textfield to be passed into the on click.
   // The onclick value is passed up to app to change state for the search

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
                        // onChange={(e)=>setValue(e.target.value)}
                        onClick={(e)=>onHandleSearch(e.target.value)}
                     />
                  )}
               />
            </Box>
            <Box>
               <Button
                  disableElevation
                  variant="contained"
                  size="small"
                  onClick={()=>onHandleSearch(value)}
               >
                  Fetch jobs
               </Button>
            </Box>
         </Box>
      </>
   );
}

export default NavBarSearch;
