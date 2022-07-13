import React, { useState, useEffect } from "react";
import NavBar from "./Component/NavBar";
import Footer from "./Component/Footer";
import LandingPage from "./Component/LandingPage";
import { Routes, Route, Links, useParams, useNavigate } from "react-router-dom";
import SignInForm from "./Component/SignInForm";
import JobPage from "./Component/JobPage";
import ReviewForm from "./Component/ReviewForm";
import ProfilePage from "./Component/ProfilePage";
import CompanyPage from "./Component/CompanyPage";

function App() {
   const [user, setUser] = useState(null);
   const [jobs, setJobs] = useState([]);
   const [renderCompany, setRenderCompany] = useState();


   const onRenderCompany = (company) => {
      setRenderCompany(company);
   };


   const onSetUser = (updateUser) => setUser(updateUser);

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
      fetch(`/users/${id}/applications`)
         .then((r) => r.json())
         .then((data) => setJobs(data));
   };

   const handleDeleteProfile = (id) => {
      fetch(`/users/${id}`, {
         method: "DELETE",
      });
      handleSignOut();
      // render a 'Sorry to see you go message'
   };

   let { jobListingId } = useParams();
   let navigate = useNavigate();

   return (
      <>
         <NavBar
            user={user}
            handleSignOut={handleSignOut}
         />
         <Routes>
            <Route
               path="/"
               element={
                  user ? null : (
                     <LandingPage
                        onSetUser={onSetUser}
                        navigate={navigate}
                        user={user}
                     />
                  )
               }
            />
            <Route
               path="signin"
               element={
                  user ? null : (
                     <SignInForm onSetUser={onSetUser} navigate={navigate} />
                  )
               }
            />
            <Route
               path="profile"
               element={
                  user ? (
                     <ProfilePage
                        user={user}
                        jobPostings={jobs}
                        onSetUser={onSetUser}
                        handleProfilePage={handleProfilePage}
                        handleDeleteProfile={handleDeleteProfile}
                     />
                  ) : null
               }
            ></Route>
            <Route
               path="findjobs"
               element={
                  <JobPage
                     jobPostings={jobs}
                     onRenderCompany={onRenderCompany}
                     user={user}
                  />
               }
            />
            <Route path="myjobs" />
            <Route path="myreviews" />
            <Route path="companyreviews" />
            <Route
               path="company"
               element={<CompanyPage {...renderCompany} />}
            />
         </Routes>
         <Footer />
      </>
   );
}

export default App;
