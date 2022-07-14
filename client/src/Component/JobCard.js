import React from "react";
import { Stack, Card, CardContent, Typography } from "@mui/material";

export default function JobCard({
   id,
   company_name,
   position,
   location,
   compensation,
   job_type,
   user,
   handleClick,
}) {
   // set conidtion for user.
   // if user ? null : handle

   // const profileJobCard = (
   //    <CardContent>
   //       <Typography>{position}</Typography>
   //       <Typography>{company_name}</Typography>
   //       <Typography>{location}</Typography>
   //       <Typography>${compensation}</Typography>
   //       <Typography>{job_type}</Typography>
   //    </CardContent>
   // );

   // const jobCard = (
   //    <CardContent onClick={() => handleClick(id)}>
   //       <Typography>{position}</Typography>
   //       <Typography>{company_name}</Typography>
   //       <Typography>{location}</Typography>
   //       <Typography>${compensation}</Typography>
   //       <Typography>{job_type}</Typography>
   //    </CardContent>
   // );

   return (
      <div>
         <Stack>
            <Card elevation={3}>
               <CardContent onClick={() => handleClick(id)}>
                  <Typography>{position}</Typography>
                  <Typography>{company_name}</Typography>
                  <Typography>{location}</Typography>
                  <Typography>${compensation}</Typography>
                  <Typography>{job_type}</Typography>
               </CardContent>
            </Card>
         </Stack>
      </div>
   );
}
