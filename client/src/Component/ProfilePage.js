import React, { useState, useEffect } from "react";
import { Box, Stack, Divider, Paper } from "@mui/material";
import ProfileFeature from "./ProfileFeature";
import AppliedToJobs from "./AppliedToJobs";

function ProfilePage({user, handleDeleteProfile, onSetUser }) {

   const [appliedJobs, setAppliedJobs] = useState([]);

   useEffect(() => {
      fetch(`/users/${user.id}/applications`)
         .then((r) => r.json())
         .then((data) => setAppliedJobs(data));
   }, []);

   let renderProfileJobs

   if (appliedJobs)
      renderProfileJobs = appliedJobs.map((application) => {
         return <AppliedToJobs key={application.id} user={user} {...application} />
      });


   return (
      
<div style = {{
      backgroundImage: "white",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "fixed",
      height: "80vh",
      display: 'flex'
   }}>

   <Stack direction={'row'} margin={'auto'} spacing={4} alignItems={'center'} justifyContent={'center'}>
      <Box sx={{ width: '45vw', height: "80vh", bgcolor: 'white', margin: 'auto' }}>
         <Box sx={{ width: '40vw', height: "80vh", bgcolor: 'white', position: 'relative', margin: 'auto', overflow: 'auto' }}>
            <Divider sx={{ marginBottom: '20px', color: 'white' }} />
            <Stack spacing={4} >
               {renderProfileJobs}
            </Stack>
         </Box>
      </Box>
      <Box sx={{ width: '45vw', height: "80vh", bgcolor: 'white', margin: 'auto', }}>
         <Divider sx={{ marginBottom: '10px', color: 'white' }} />
         <Box sx={{ width: '40vw', height: "75vh", bgcolor: 'white', position: 'relative', margin: 'auto', borderBottomLeftRadius: '8px' }}>
            <Paper elevation={0} sx={{ marginTop: '2vw', height: '100%', bgcolor: 'snow' }}>
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
   )}

export default ProfilePage;

// Jobcard tile is used in jobpage and profile page
// Pass jobcard inside of jobpage, will reuse job index on initial useeffect
// Profilepage reuses jobcard tile, with different get request to applied to table
// Set state in fetch request for rendering jobcard tile list for logged in user
// Once user applies to a job (post request to applied to), update state
