
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Mail } from "lucide-react";
import PasswordInput from "../components/auth/PasswordInput";
import InputField from "../components/common/InputField";
import Button from "../components/common/Button";
import StatusBar from "../components/common/StatusBar";
import workmateLogo from "../assets/images/workmate-logo.png";

export default function SignIn() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const saved = JSON.parse(localStorage.getItem("workmate_user") || "null");

    if (saved?.email === email && saved.password === password && saved.verified) {
      navigate("/home");
    } else {
      setError("Invalid credentials or email not verified");
    }
  };

  return (
    <div className="app-container min-h-screen bg-white px-5">
      <StatusBar />
      <div className="mb-10 flex flex-col items-center pt-7 text-center">
        <img src={workmateLogo} alt="Work Mate Logo" className="mb-3 h-[52px] w-[52px] object-contain" />
        <h2 className="text-lg font-bold text-[#17182B]">Work Mate</h2>
        <p className="mt-1 text-xs text-gray-500">Register Using Your Credentials</p>
      </div>

      <div className="mb-9 text-center">
        <h1 className="text-[25px] font-bold text-[#17182B]">Welcome Back!</h1>
        <p className="mt-2 text-sm text-gray-500">Sign in to continue using Work Mate</p>
      </div>

      <form onSubmit={handleLogin} className="space-y-5">
        <InputField label="Email" placeholder="Enter Your Email" value={email} onChange={(e) => setEmail(e.target.value)} type="email" icon={Mail} required />
        <PasswordInput label="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <div className="text-right">
          <button type="button" onClick={() => navigate("/forgot-password")} className="text-sm text-primary">Forgot Password?</button>
        </div>
        {error && <p className="text-xs text-red-500">{error}</p>}
        <Button type="submit">Sign In</Button>
      </form>

      <p className="mt-12 text-center text-sm text-[#17182B]">
        Don't have an account?{" "}
        <button type="button" onClick={() => navigate("/signup")} className="text-primary">Sign Up</button>
      </p>
    </div>
  );
}
