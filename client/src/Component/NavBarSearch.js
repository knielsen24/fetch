import React, { useState } from "react";
import { TextField, Box, Autocomplete, Button } from "@mui/material";
import startCase from "lodash.startcase";

function NavBarSearch({ jobPostings, onHandleSearch }) {
   const [searchValue, setSearchValue] = useState({ search: "" });

   console.log(jobPostings);
   // const allOptions = []

   const removeDuplicates = (value, index, self) => {
      return self.indexOf(value) === index;
   };

   let allPositions;

   if (jobPostings)
      allPositions = jobPostings
         .map((job) => startCase(job.position))
         .filter(removeDuplicates);

   const handleChange = (e) => {
      const { name, value } = e.target;
      setSearchValue({ ...searchValue, [name]: value });
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      console.log(searchValue);
      if (searchValue.search){
         onHandleSearch(searchValue.search.toLowerCase());
      }
      else {

      }
   };

   return (
      <>
         <form onSubmit={handleSubmit} onChange={handleChange}>
            <Box
               display={"flex"}
               columnGap={"10px"}
               alignItems={"center"}
               justifyContent={"center"}
            >
               <Box margin={2} sx={{ width: "50vw" }}>
                  <Box />
                  <Autocomplete
                     freeSolo
                     id="free-solo"
                     autoSelect
                     // disableClearable
                     options={allPositions}
                     renderInput={(params) => (
                        <TextField
                           id={params.id}
                           {...params}
                           label="...fetch your dream job"
                           InputProps={{
                              ...params.InputProps,
                              type: "search",
                           }}
                           fullWidth
                           // disableClearable
                           size="small"
                           // id="filled-search"
                           name="search"
                           variant="outlined"
                           sx={{ margin: "auto" }}
                           value={searchValue}
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
