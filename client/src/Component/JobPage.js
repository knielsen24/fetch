import React, {useState} from "react";
import { Box, Stack } from "@mui/material";
import JobCard from "./JobCard";
import JobFeature from "./JobFeature";

export default function JobPage({ jobs }) {

  const [featuredJob, setFeaturedJob] = useState([jobs[0]])

  const renderJobCards = jobs.map(job => {
    return <JobCard
      key = {job.id}
      {...job} />
  })

  return (
    <div>
        <Stack direction="row" spacing={10}>
            <Stack style={{maxHeight: 700, overflow: 'auto'}}>
                {renderJobCards}
            </Stack>
            <JobFeature featuredJob={featuredJob}/>
        </Stack>
    </div>
  )
}
