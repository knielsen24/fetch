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
import AboutUs from "./Component/AboutUs";

function App() {
   const [user, setUser] = useState(null);
   const [jobs, setJobs] = useState([]);
   const [renderCompany, setRenderCompany] = useState();
   const [searchValue, setSearchValue] = useState("")

   const onRenderCompany = (company_id) => setRenderCompany(company_id);
   const onSetUser = (updateUser) => setUser(updateUser);
   const onHandleSearch = (newSearch) => setSearchValue(newSearch);

   const filteredJobs = jobs.filter((job) =>
      job.position.toLowerCase().includes(searchValue.toLowerCase())
   );


   const navigate = useNavigate();
   let { jobListingId } = useParams();

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

   // const onSearchClick = (newSearch) => {
   //    console.log(newSearch);
   //    setSearchValue(newSearch)
   // };


   return (
      <>
         <NavBar
            user={user}
            handleSignOut={handleSignOut}
            onHandleSearch={onHandleSearch}
            jobPostings={jobs}
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
                     jobPostings={filteredJobs}
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
            <Route path="aboutus" element={<AboutUs />} />
         </Routes>
         <Footer />
      </>
   );
}

export default App;

// password !1234A
