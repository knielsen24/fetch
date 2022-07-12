import React from "react";
import { Stack, Card, CardContent, Typography } from "@mui/material";

export default function JobCard({
   id,
   company,
   position,
   location,
   compensation,
   job_type,
   description,
   benefits,
   handleClick
}) {
   return (
      <div >
         <Stack>
            <Card>
               <CardContent onClick={()=>handleClick(id)}>
                  <Typography>{position}</Typography>
                  <Typography>{company}</Typography>
                  <Typography>{location}</Typography>
                  <Typography>{compensation}</Typography>
                  <Typography>{job_type}</Typography>
                  <Typography>{description}</Typography>
                  <Typography>{benefits}</Typography>
               </CardContent>
            </Card>
         </Stack>
      </div>
   );
}

