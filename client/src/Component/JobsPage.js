import React from 'react'
import { Box, Stack } from '@mui/material'
import JobCard from './JobCard'
import JobFeature from './JobFeature'

export default function JobPage({jobs}) {

  const renderJobCards = jobs.map(job => {
    return <JobCard
      key = {job.id}
      {...job} />
  })

  return (
    <div>
        <Stack direction="row" spacing={10}>
            <Stack>
                {renderJobCards}
            </Stack>
            <Stack>
                <JobFeature/>
            </Stack>
        </Stack>
    </div>
  )
}
