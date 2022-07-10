import NavBar from "./Component/NavBar";
import LandingPage from "./Component/LandingPage";
import { Routes, Route, Links, useParams, useNavigate } from "react-router-dom";
import SignInForm from "./Component/SignInForm";

function App() {
   let { jobListingId } = useParams();
   let navigate = useNavigate();

   return (
      <>
         <NavBar />
         <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="signin" element={<SignInForm />} />
            <Route path="profile" />
            <Route path="findjobs/:jobListingId" />
            <Route path="companyreviews" />
         </Routes>
      </>
   );
}

export default App;
