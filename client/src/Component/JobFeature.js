import React from 'react'
import { Stack, Card, CardContent, CardActions, Typography, Divider, Button} from '@mui/material'

export default function JobFeature({
  id,
  company_name,
  position,
  location,
  compensation,
  job_type,
  description,
  benefits,
}) {
  return (
    <div>
      <Stack>
            <Card>
               <CardContent>
                  <Typography variant= 'h5' fontWeight={600}>{position}</Typography>
                  <Typography>{company_name}</Typography>
                  <Typography>{location}</Typography>
                  <Typography>${compensation}</Typography>
                  <Typography>{job_type}</Typography>
                    <CardActions>
                      <Button>Apply Now</Button>
                      <Button>Like</Button>
                    </CardActions>
                  <Divider/>
                  <Typography variant= 'h6' fontWeight={600}>Job details</Typography>
                  <Typography variant= 'h8' fontWeight={600} display="block">Compensation</Typography>
                  <Typography variant= 'h8' display="block">${compensation} a year</Typography>
                  <Typography variant= 'h8' fontWeight={600} display="block">Job Type</Typography>
                  <Typography variant= 'h8' display="block">{job_type}</Typography>
                  <Divider/>
                  

                  <Typography>{benefits}</Typography>
                  <Typography>{description}</Typography>

               </CardContent>
            </Card>
         </Stack>
    </div> 
  )
}
