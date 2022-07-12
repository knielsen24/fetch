import React from "react";

function ProfileUpdate() {

	const [updateUserData, setupdateUserData] = useState(updateUser)
	
	const updateUser = {
      first_name: "",
      last_name: "",
      email: "",
		image_url: "",
   };

	return <div>ProfileUpdate</div>;
}

export default ProfileUpdate;
