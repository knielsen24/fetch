import React, { useState } from "react";
import { Box, Stack } from "@mui/material";
import JobCard from "./JobCard";
import ProfileFeature from "./ProfileFeature";
import AppliedToJobs from "./AppliedToJobs";

function ProfilePage({ jobPostings, user, handleDeleteProfile, onSetUser }) {
   // let renderJobCards;

   // if (jobPostings) {
   //    renderJobCards = jobPostings.map((post) => {
   //       return <JobCard key={post.id} {...post} />;
   //    });
   // }
   
   return (
      <div>
         <Stack direction="row" spacing={10}>
            <AppliedToJobs user={user}/>
            {/* <Stack style={{ maxHeight: 700, overflow: "auto" }}>
               {renderJobCards}
            </Stack> */}
            <ProfileFeature
               handleDeleteProfile={handleDeleteProfile}
               user={user}
               onSetUser={onSetUser}
            />
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
