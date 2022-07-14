import React, { useState } from "react";
import { Box, Stack, Divider, Paper, Button } from "@mui/material";
import JobCard from "./JobCard";

import ProfileFeature from "./ProfileFeature";

function ProfilePage({ jobPostings, user, handleDeleteProfile, onSetUser }) {
   let renderJobCards;

   if (jobPostings) {
      renderJobCards = jobPostings.map((post) => {
         return <JobCard key={post.id} {...post} />;
      });
   }

   return (
      <div
      style={{
         backgroundImage: "white",
         backgroundSize: "cover",
         backgroundRepeat: "no-repeat",
         backgroundPosition: "fixed",
         height: "80vh",
         display: 'flex'
      }}
         >
         <Stack direction={'row'} margin={'auto'} spacing={4} alignItems={'center'} justifyContent={'center'}>
            <Box sx={{width: '45vw', height: "80vh", bgcolor:'white', margin:'auto'}}>
               <Box sx={{width: '40vw', height: "80vh", bgcolor:'white', position:'relative', margin:'auto', overflow: 'auto'}}>
                  <Divider sx={{marginBottom: '20px', color:'white'}} />
                     <Box width={'40vw'}>
                     <Stack alignContent={'center'} justifyContent={'center'} spacing={4}>
                        {renderJobCards}
                        
                     </Stack>
                     </Box>
               </Box>
            </Box>
            <Box sx={{width: '45vw', height: "80vh", bgcolor:'white', margin:'auto' }}>
               <Divider sx={{marginBottom: '10px', color:'white'}} />
                  <Box sx={{width: '40vw', height: "75vh", bgcolor:'white', position:'relative', margin:'auto', borderBottomLeftRadius: '8px'}}>
                     <Paper elevation={5} sx={{marginTop:'2vw', height:'100%', bgcolor:'white', borderStyle: 'solid', borderWidth: 'thin'}}>
                        <ProfileFeature
                           handleDeleteProfile={handleDeleteProfile}
                           user={user}
                           onSetUser={onSetUser}
                        />
                     </Paper>
                  </Box>
            </Box>
         </Stack>
      </div>
   );
}

export default ProfilePage;

// Jobcard tile is used in jobpage and profile page
// Pass jobcard inside of jobpage, will reuse job index on initial useeffect
// Profilepage reuses jobcard tile, with different get request to applied to table
// Set state in fetch request for rendering jobcard tile list for logged in user
// Once user applies to a job (post request to applied to), update state
