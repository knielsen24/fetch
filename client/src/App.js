import React, { useState, useEffect } from "react";
import NavBar from "./Component/NavBar";
import Footer from "./Component/Footer";
import LandingPage from "./Component/LandingPage";
import { Routes, Route, Links, useParams, useNavigate } from "react-router-dom";
import SignInForm from "./Component/SignInForm";
import JobPage from './Component/JobPage';
import ReviewForm from "./Component/ReviewForm";
import ProfilePage from "./Component/ProfilePage";

function App() {
   const [user, setUser] = useState(null);
   const [jobs, setJobs] = useState([]);

   useEffect(() => {
      fetch("/findjobs")
         .then((r) => r.json())
         .then((data) => setJobs(data));
   }, []);

   useEffect(() => {
      fetch("/me").then((r) => {
         if (r.ok) {
            r.json().then((user) => setUser(user));
         }
      });
   }, []);

   const handleSignOut = () => {
      fetch("/logout", { method: "DELETE" })
         .then((r) => {
            if (r.ok) {
               setUser(null);
            }
         })
         .then(navigate("/"));
   };

    // How are we searching for list of jobs(user id)
	 const handleProfilePage = (id) => {
      fetch("/findjobs")
         .then((r) => r.json())
         .then((data) => setJobs(data));
   };

   const handleDeleteProfile = (id) => {

      fetch(`/users/${id}`, {
         method: "DELETE",
      }).then(handleSignOut());
		// render a 'Sorry to see you go message'
   };

   let { jobListingId } = useParams();
   let navigate = useNavigate();

   return (
      <>
         <NavBar user={user} handleSignOut={handleSignOut} />
         <Routes>
            <Route
               path="/"
               element={user ? null : <LandingPage setUser={setUser} navigate={navigate} user={user} />}
            />
            <Route
               path="signin"
               element={
                  user ? null : (
                     <SignInForm setUser={setUser} navigate={navigate} />
                  )
               }
            />
            <Route
               path="profile"
               element={
                  <ProfilePage
                     user={user}
                     jobPostings={jobs}
                     handleProfilePage={handleProfilePage}
                     handleDeleteProfile={handleDeleteProfile}
                  />
               }
            >

				</Route>
            <Route path="findjobs" element={<JobPage jobPostings={jobs} />} />
            <Route path="myjobs" />
            <Route path="myreviews" />
            <Route path="companyreviews" />
            <Route path='reviewform' element={<ReviewForm />} />
         </Routes>
         <Footer />
      </>
   );
}

export default App;
