import React from 'react'
import { Stack, Card, CardContent, Typography } from '@mui/material'

function JobCard({company, position, location, compensation, job_type, description, benefits}) {
  return (
    <div>
        <Stack>
            <Card>
                <CardContent>
                  <Typography>
                    {position}
                  </Typography>
                  <Typography>
                    {company}
                  </Typography>
                  <Typography>
                    {location}
                  </Typography>
                  <Typography>
                    {compensation}
                  </Typography>
                  <Typography>
                    {job_type}
                  </Typography>
                  <Typography>
                    {description}
                  </Typography>
                  <Typography>
                    {benefits}
                  </Typography>
                </CardContent>
            </Card>
        </Stack>
    </div>
  )
}

export default JobCard