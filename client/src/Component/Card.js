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
   console.log(startCase(position));

   // const capitalize = (word) => startCase()

   return (
      <>
         <JobCard elevation={3}>
            {/* When on profile we do not want Click event handler */}
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
