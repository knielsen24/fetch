import React, { useState } from "react";
import { TextField, Box, Autocomplete, Button } from "@mui/material";

function NavBarSearch({ jobPostings, onHandleSearch }) {
   const handleChangeSearch = (e) => onHandleSearch(e.target.value);

   return (
      <>
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
      </>
   );
}

export default NavBarSearch;
