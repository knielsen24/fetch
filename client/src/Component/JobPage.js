import React, { useState, useEffect } from "react";
import { Box, Stack, Divider, Paper } from "@mui/material";
import JobCard from "./JobCard";
import JobFeature from "./JobFeature";

export default function JobPage({
   jobPostings,
   user,
   onRenderCompany,
   onFeaturedCard,
   featuredJob,
}) {

   useEffect(() => {
      onFeaturedCard(jobPostings[0]);
   }, []);

   const handleClick = (id) => {
      const clickedJob = jobPostings.find((job) => job.id === id);
      onFeaturedCard(clickedJob);
   };

   let renderJobCards;

   if (jobPostings) {
      renderJobCards = jobPostings.map((post) => {
         return (
            <JobCard
               key={post.id}
               {...post}
               handleClick={handleClick}
               user={user}
            />
         );
      });
   }

   return (
      <div
         style={{
            backgroundImage: `white`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "fixed",
            height: "80vh",
            display: "flex",
         }}
      >
         <Stack
            direction={"row"}
            margin={"auto"}
            spacing={4}
            alignItems={"center"}
            justifyContent={"center"}
         >
            <Box
               sx={{
                  width: "45vw",
                  height: "80vh",
                  bgcolor: "white",
                  margin: "auto",
               }}
            >
               <Box
                  sx={{
                     width: "40vw",
                     height: "80vh",
                     bgcolor: "white",
                     position: "relative",
                     margin: "auto",
                     overflow: "hidden",
                     overflowY: "scroll",
                  }}
               >
                  <div sx={{ marginBottom: "20px", color: "white" }} />
                  <Box width={"40vw"}>
                     <Stack
                        alignContent={"center"}
                        justifyContent={"center"}
                        spacing={4}
                     >
                        {renderJobCards}
                     </Stack>
                  </Box>
               </Box>
            </Box>
            <Box
               display={"flex"}
               sx={{
                  width: "45vw",
                  height: "80vh",
                  bgcolor: "white",
                  margin: "auto",
               }}
            >
               <div sx={{ marginBottom: "10px", color: "white" }} />
               <Box
                  sx={{
                     width: "40vw",
                     height: "75vh",
                     bgcolor: "white",
                     margin: "auto",
                     borderBottomLeftRadius: "8px",
                  }}
               >
                  <Paper
                     elevation={5}
                     sx={{
                        margin: "auto",
                        height: "100%",
                        bgcolor: "white",
                        borderStyle: "solid",
                        borderWidth: "thin",
                     }}
                  >
                     <JobFeature
                        {...featuredJob}
                        user={user}
                        onRenderCompany={onRenderCompany}
                     />
                  </Paper>
               </Box>
            </Box>
         </Stack>
      </div>
   );
}
