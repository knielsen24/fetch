import React from "react";
import {Card, CardContent, Typography} from "@mui/material"
import startCase from "lodash.startcase";

export default function AppliedToJobs({
    id,
    company_name,
    position,
    location,
    compensation,
    job_type,
    description,
    user,
 }) {
   
   return (
        <div>
            <Card elevation={5} sx={{borderStyle: 'solid', borderWidth: 'thin'}}>
                <CardContent>
                    <Typography variant="h5">{startCase(position)}</Typography>
                    <Typography>{company_name}</Typography>
                    <Typography>{location}</Typography>
                    <Typography>${compensation}</Typography>
                    <Typography>{job_type}</Typography>
                    <Typography>{description}</Typography>

                </CardContent>
            </Card>   
        </div>
)}
