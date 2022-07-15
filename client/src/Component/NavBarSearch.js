import React, { useState } from "react";
import { TextField, Box, Autocomplete, Button } from "@mui/material";
import startCase from "lodash.startcase";

function NavBarSearch({ jobPostings, onHandleSearch }) {
   const [value, setValue] = useState("");

   console.log(jobPostings);
   // const allOptions = []

   const removeDuplicates = (value, index, self) => {
      return self.indexOf(value) === index
   }
   const allPositions = jobPostings.map((job) => startCase(job.position)).filter(removeDuplicates)

   function handleSubmit(e) {
      e.preventDefault();
      console.log(value);
      onHandleSearch(value.toLowerCase());
   }

   return (
      <>
         <form onSubmit={handleSubmit} onChange={(e)=> setValue(e.target.value)}>
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
                     autoSelect

                     options={allPositions}
                     // options={uniqueJobs.forEach((element) => element)}
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
                           disableClearable
                           size="small"
                           // id="filled-search"
                           name="position"
                           variant="outlined"
                           sx={{ margin: "auto" }}
                           value={value}
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
