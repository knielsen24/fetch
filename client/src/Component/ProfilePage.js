import React from "react";

function ProfilePage() {

	return <div>Profile</div>;
}



export default ProfilePage;

// Jobcard tile is used in jobpage and profile page
	// Pass jobcard inside of jobpage, will reuse job index on initial useeffect
	// Profilepage reuses jobcard tile, with different get request to applied to table
	// Set state in fetch request for rendering jobcard tile list for logged in user
	// Once user applies to a job (post request to applied to), update state
