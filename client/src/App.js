import React, {useState, useEffect} from 'react';
import NavBar from "./Component/NavBar";
import Footer from "./Component/Footer";
import LandingPage from "./Component/LandingPage";
import { Routes, Route, Links, useParams, useNavigate } from "react-router-dom";
import SignInForm from "./Component/SignInForm";
import JobPage from './Component/JobsPage';

function App() {

   const [user, setUser] = useState(null);

//   useEffect(() => {
//     fetch("/me").then((r) => {
//       if (r.ok) {
//         r.json().then((user) => setUser(user));
//       }
//     });
//   }, []);

//   if (!user) return <SignInForm setUser={setUser} />;


   // let { jobListingId } = useParams();
   // let navigate = useNavigate();

   return (
      <>
         <NavBar user = {user}/>
         <Routes>
            <Route path="/" element={<LandingPage setUser={setUser}/>} />
            <Route path="signin" element={<SignInForm />} />
            <Route path="profile" />
            <Route path="findjobs" element={<JobPage />}/>
            <Route path="companyreviews" />
         </Routes>
         <Footer />
      </>
   );
}

export default App;
