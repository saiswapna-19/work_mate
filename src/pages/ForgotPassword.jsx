
import { useState } from "react";
import { Mail } from "lucide-react";
import BackButton from "../components/common/BackButton";
import InputField from "../components/common/InputField";
import Button from "../components/common/Button";
import Logo from "../components/common/Logo";
import StatusBar from "../components/common/StatusBar";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage("Password recovery request submitted.");
  };

  return (
    <div className="app-container min-h-screen bg-white px-5">
      <StatusBar />
      <div className="pt-3"><BackButton to="/signin" /></div>
      <div className="mt-12"><Logo /></div>

      <div className="mt-12 text-center">
        <h1 className="text-xl font-bold">Forgot Password?</h1>
        <p className="mt-3 text-xs leading-5 text-gray-500">
          Enter your registered email address to recover your password.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="mt-9 space-y-5">
        <InputField
          label="Email"
          placeholder="Enter Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          icon={Mail}
          type="email"
          required
        />
        {message && <p className="text-xs text-green-600">{message}</p>}
        <Button type="submit">Continue</Button>
      </form>
    </div>
  );
}
