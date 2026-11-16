
import { useNavigate } from "react-router-dom";
import Button from "../components/common/Button";
import StatusBar from "../components/common/StatusBar";
import successLogo from "../assets/images/success-logo.png";

export default function Welcome() {
  const navigate = useNavigate();

  return (
    <div className="app-container relative flex min-h-screen flex-col justify-end overflow-hidden bg-[#FAFAFF] md:min-h-[550px]">
      <div className="absolute inset-x-0 top-0 z-20">
        <StatusBar />
      </div>
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />

      <div className="relative z-10 rounded-t-2xl bg-white px-6 pb-10 pt-16 text-center">
        <div className="absolute -top-12 left-1/2 flex h-16 w-16 -translate-x-1/2 items-center justify-center overflow-hidden rounded-2xl bg-primary shadow-lg">
          <img src={successLogo} alt="Success Logo" className="h-full w-full object-contain" />
        </div>

        <h1 className="text-lg font-bold">Welcome To Work Mate!</h1>
        <p className="mt-4 text-xs leading-5 text-gray-500">
          To enhance your user experience, please set up your
          profile first. This will help us tailor the app to your
          needs and ensure you get the most out of our features!
        </p>

        <div className="mt-6 space-y-3">
          <Button onClick={() => navigate("/my-work-profile")}>Set Up My Profile</Button>
          <Button variant="outline" onClick={() => navigate("/home")}>Explore The App First</Button>
        </div>
      </div>
    </div>
  );
}
