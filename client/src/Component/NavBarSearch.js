import React, { useState } from "react";
import { TextField, Box, Autocomplete, Button } from "@mui/material";

function NavBarSearch({ jobPostings, onHandleSearch }) {
   const [value, setValue] = useState("");

   console.log(value);
   //We need the value from the textfield to be passed into the on click.
   // The onclick value is passed up to app to change state for the search

   const handleChange = (e) => {
      setValue(e.target.value);
   };

   function handleSubmit(e) {
      e.preventDefault();
      onHandleSearch(value)
   }
   
   return (
      <>
         <form onSubmit={handleSubmit} onChange={handleChange}>
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
                           value=""
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
      </>
   );
}

export default NavBarSearch;
