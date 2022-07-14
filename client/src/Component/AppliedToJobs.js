import React, { useState, useEffect } from "react";

export default function AppliedToJobs({ user }) {
   const [appliedJobs, setAppliedJobs] = useState([]);

   // const renderProfileJobs = appliedJobs.map(application => {
   //     return application.job_posting
   // })

   console.log(appliedJobs)

   useEffect(() => {
      fetch(`/users/${user.id}/applications`)
         .then((r) => r.json())
         .then((data) => setAppliedJobs(data));
   }, []);

   return <div>AppliedToJobs</div>;
}
