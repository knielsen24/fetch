import React from "react";
import {Card, CardContent, Typography} from "@mui/material"

export default function AppliedToJobs({
    id,
    company_name,
    position,
    location,
    compensation,
    job_type,
    user,
 }) {
   
   return (
        <div>
            <Card elevation={3}>
                <CardContent>
                    <Typography>{position}</Typography>
                    <Typography>{company_name}</Typography>
                    <Typography>{location}</Typography>
                    <Typography>${compensation}</Typography>
                    <Typography>{job_type}</Typography>
                </CardContent>
            </Card>   
        </div>
)}
