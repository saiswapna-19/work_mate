
import { Navigate, Route, Routes } from "react-router-dom";

import Onboarding from "./pages/Onboarding";
import Welcome from "./pages/Welcome";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import EmailVerification from "./pages/EmailVerification";
import ForgotPassword from "./pages/ForgotPassword";
import TermsAndPrivacy from "./pages/TermsAndPrivacy";
import Home from "./pages/Home";
import MyProfile from "./pages/MyProfile";
import MyWorkProfilePage from "./pages/MyWorkProfilePage";
import AchievementsPage from "./pages/AchievementsPage";

function App() {
  return (
    <div className="app-layout">
      <Routes>
        <Route path="/" element={<Onboarding />} />
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/verify-email" element={<EmailVerification />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/terms-and-privacy" element={<TermsAndPrivacy />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/home" element={<Home />} />
        <Route path="/my-work-profile" element={<MyWorkProfilePage />} />
        <Route path="/profile" element={<MyProfile />} />
        <Route path="/achievements" element={<AchievementsPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}

export default App;
