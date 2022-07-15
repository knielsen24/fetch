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
import axios from "axios";

function App() {
   const [user, setUser] = useState(null);
   const [jobs, setJobs] = useState([]);
   const [renderCompany, setRenderCompany] = useState();
   const [searchValue, setSearchValue] = useState("");
   const navigate = useNavigate();
   let { jobListingId } = useParams();

   const onRenderCompany = (company_id) => setRenderCompany(company_id);
   const onSetUser = (updateUser) => setUser(updateUser);
   const onHandleSearch = (newSearch) => {
      console.log(newSearch);
      setSearchValue(newSearch.toLowerCase());
   };

   // const filteredJobs = jobs.filter((job) =>
   //    job.position.toLowerCase().includes(searchValue)
   // );

   let offset = 0;
   const loadMoreJobs = () => {
      axios.get(`/findjobs`).then(({ data }) => {
         const newJobs = [];
         data.forEach((job) => newJobs.push(job))
         setJobs(oldJobs => [...oldJobs, ...newJobs]);
      });
      offset += 10;
   };

   const handleScroll = (e) => {
      console.log("top: ", e.target.documentElement.scrollTop);
      console.log("win:", window.innerHeight);
      console.log("Height: ", e.target.documentElement.scrollHeight);
      if (
         window.innerHeight + e.target.documentElement.scrollTop + 1 >=
         e.target.documentElement.scrollHeight
      ) {
         loadMoreJobs();
      }
   };

   useEffect(() => {
      loadMoreJobs();
      // window.addEventListener("scroll", handleScroll);
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
            <Route path="aboutus" element={<AboutUs />} />
         </Routes>
         <Footer />
      </>
   );
}

export default App;

// password !1234A
