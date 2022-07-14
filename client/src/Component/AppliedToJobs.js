import React, { useState, useEffect } from "react";

export default function AppliedToJobs({ user }) {
   const [appliedJobs, setAppliedJobs] = useState([]);

   useEffect(() => {
      fetch(`/users/${user.id}/applications`)
         .then((r) => r.json())
         .then((data) => setAppliedJobs(data));
   }, []);

   const renderProfileJobs = appliedJobs.map((application) => {
      return application.job_posting;
   });

   return <div>AppliedToJobs</div>;
}
