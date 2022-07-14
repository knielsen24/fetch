import React, { useState } from "react";
import { Box, Stack, Divider, Paper } from "@mui/material";
import JobCard from "./JobCard";
import JobFeature from "./JobFeature";

export default function JobPage({ jobPostings, user, onRenderCompany }) {
   const [featuredJob, setFeaturedJob] = useState(jobPostings[0]);

   const handleClick = (id) => {
      const clickedJob = jobPostings.find((job) => job.id === id);
      setFeaturedJob(clickedJob);
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
      <div>
         <Stack direction={'row'} margin={'auto'} spacing={4} alignItems={'center'} justifyContent={'center'}>
            <Box sx={{ width: '45vw', height: "80vh", bgcolor: 'white', margin: 'auto' }}>
               <Box sx={{ width: '40vw', height: "80vh", bgcolor: 'white', position: 'relative', margin: 'auto', overflow: 'hidden', overflowY: 'scroll' }}>
                  <Divider sx={{ marginBottom: '20px', color: 'white' }} />
                  <Box width={'40vw'}>
                     <Stack alignContent={'center'} justifyContent={'center'} spacing={4}>
                        {renderJobCards}

                     </Stack>
                  </Box>
               </Box>
            </Box>
            <Box sx={{ width: '45vw', height: "80vh", bgcolor: 'white', margin: 'auto' }}>
               <Divider sx={{ marginBottom: '10px', color: 'white' }} />
               <Box sx={{ width: '40vw', height: "75vh", bgcolor: 'white', position: 'relative', margin: 'auto', borderBottomLeftRadius: '8px' }}>
                  <Paper elevation={5} sx={{ marginTop: '2vw', height: '100%', bgcolor: 'white', borderStyle: 'solid', borderWidth: 'thin' }}>
                     <JobFeature
                        {...featuredJob}
                        user={user}
                        onRenderCompany={onRenderCompany}
                     />
                  </Paper>
               </Box>
            </Box>
         </Stack>

      </div >
   );
}
