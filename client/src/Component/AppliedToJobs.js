import React from "react";
import {Card, CardContent, CardActions, IconButton, Typography} from "@mui/material"
import DeleteIcon from '@mui/icons-material/Delete';

export default function AppliedToJobs({
    id,
    company_name,
    position,
    location,
    compensation,
    job_type,
    user,
 }) {

    const handleDeleteApplication = (id, user) => {
        fetch(`http://localhost:4000/applied_tos/${id}`, {
           method: "DELETE",
        });
     };
   
   return (
        <div>
            <Card elevation={3}>
                <CardContent>
                    <Typography>{position}</Typography>
                    <Typography>{company_name}</Typography>
                    <Typography>{location}</Typography>
                    <Typography>${compensation}</Typography>
                    <Typography>{job_type}</Typography>
                    <CardActions>
                        <IconButton>
                            <DeleteIcon style={{color: '#d11a2a'}} onClick={()=>handleDeleteApplication(id)}/>
                        </IconButton>
                    </CardActions>
                </CardContent>
            </Card>   
        </div>
)}
