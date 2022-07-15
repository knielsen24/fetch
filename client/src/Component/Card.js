import React from "react";
import { Stack, Card as JobCard, CardContent, Typography } from "@mui/material";
import startCase from "lodash.startcase";

export default function Card({
   position,
   location,
   compensation,
   job_type,
   description,
   benefits,
   created_at,
   updated_at,
}) {
   return (
      <>
         <JobCard elevation={5} sx={{width: '37vw', margin:'auto', borderStyle: 'solid', borderWidth: 'thin' }}>
            <CardContent>
               <Typography>{startCase(position)}</Typography>
               <Typography>{job_type}</Typography>
               <Typography>${compensation}</Typography>
               <Typography>{startCase(location)}</Typography>
            </CardContent>
         </JobCard>
      </>
   );
}
