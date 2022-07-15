import React from "react";
import {Card, CardContent, Typography, Stack} from "@mui/material"
import startCase from "lodash.startcase";
import DeleteIcon from '@mui/icons-material/Delete';
import ShareIcon from '@mui/icons-material/Share';

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
   
    const handleClick = () => {
       
       
    }


   return (
        <div>
            <Card elevation={5} sx={{borderStyle: 'solid', borderWidth: 'thin'}}>
                <Stack spacing={6} direction={'row'} margin={'auto'} justifyContent={'center'} >
                <CardContent>
                    <Typography variant="h5">{startCase(position)}</Typography>
                    <Typography>{company_name}</Typography>
                    <Typography>{location}</Typography>
                    <Typography>${compensation}</Typography>
                    <Typography>{job_type}</Typography>
                    <Typography>{description}</Typography>
                </CardContent>
                <Stack direction={'row'}>
                <div style={{marginTop: '17px', marginRight: '20px'}}>
                <DeleteIcon sx={{color: 'gray'}} onClick={handleClick} />
                </div>
                </Stack>
                </Stack>
            </Card>   
        </div>
)}
