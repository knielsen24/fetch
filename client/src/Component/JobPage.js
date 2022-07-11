import React, {useState} from "react";
import { Box, Stack } from "@mui/material";
import JobCard from "./JobCard";
import JobFeature from "./JobFeature";

  
export default function JobPage({ jobPostings }) {
    // const [featuredJob, setFeaturedJob] = useState([jobs[0]])

   let renderJobCards;

   if (jobPostings) {
      renderJobCards = jobPostings.map((post) => {
			return <JobCard key={post.id} {...post} />;
      });
   }

   return (
      <div>
         <Stack direction="row" spacing={10}>
            <Stack style={{ maxHeight: 700, overflow: "auto" }}>
               {renderJobCards}
            </Stack>
            {/* <JobFeature featuredJob={featuredJob}/> */}
        </Stack>
    </div>
  )
}
