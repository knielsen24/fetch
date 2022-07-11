import React, { useState, useEffect } from "react";
import NavBar from "./Component/NavBar";
import Footer from "./Component/Footer";
import LandingPage from "./Component/LandingPage";
import { Routes, Route, Links, useParams, useNavigate } from "react-router-dom";
import SignInForm from "./Component/SignInForm";
import JobPage from "./Component/JobsPage";

function App() {
   const [user, setUser] = useState(null);

   useEffect(() => {
      fetch("/me").then((r) => {
         if (r.ok) {
            r.json().then((user) => setUser(user));
         }
      });
   }, []);

   // if (!user) return <SignInForm setUser={setUser} />;

   let { jobListingId } = useParams();
   let navigate = useNavigate();

   return (
      <>
         <NavBar user={user} />
         <Routes>
            <Route
               path="/"
               element={user ? null : <LandingPage setUser={setUser} />}
            />
            <Route
               path="signin"
               element={user ? null : <SignInForm setUser={setUser} />}
            />
            <Route path="profile" />
            <Route path="findjobs" element={ user ? <JobPage /> : null} />
            <Route path="companyreviews" />
         </Routes>
         <Footer />
      </>
   );
}

export default App;
