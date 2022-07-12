import React from "react";

function ProfileFeature({ user }) {
   const { first_name, last_name, email, image_url, resume } = user;

   return <div>{first_name + " " + last_name}</div>;
}

export default ProfileFeature;
