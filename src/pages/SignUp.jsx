
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Mail, Building2 } from "lucide-react";
import PasswordInput from "../components/auth/PasswordInput";
import Button from "../components/common/Button";
import StatusBar from "../components/common/StatusBar";
import { useAuth } from "../context/AuthContext";
import workmateLogo from "../assets/images/workmate-logo.png";

export default function SignUp() {
  const navigate = useNavigate();
  const location = useLocation();
  const { register } = useAuth();
  const [form, setForm] = useState({
    email: "", countryCode: "+91", phone: "", companyId: "", password: "", confirmPassword: "",
  });
  const [agreed, setAgreed] = useState(false);
  const [error, setError] = useState("");

  const update = (key, value) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    setError("");
  };

  useEffect(() => {
    if (location.state?.termsAccepted) {
      setAgreed(true);
      navigate("/signup", { replace: true, state: null });
    }
  }, [location.state, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    if (!form.email.trim() || !form.phone.trim() || !form.companyId.trim() || !form.password || !form.confirmPassword)
      return setError("Please fill in all required fields.");
    if (!/^\d+$/.test(form.phone)) return setError("Enter digits only in phone number.");
    if (form.countryCode === "+91" && form.phone.length !== 10) return setError("Enter a valid 10-digit phone number.");
    if (form.password.length < 6) return setError("Password must be at least 6 characters.");
    if (form.password !== form.confirmPassword) return setError("Passwords do not match.");
    if (!agreed) return setError("Please accept Terms & Conditions and Privacy Policy.");
    register(form);
    navigate("/verify-email");
  };

  const iconInput = (Icon, placeholder, key, type = "text") => (
    <div className="relative w-full">
      <Icon size={18} className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[#98A2B3]" />
      <input type={type} value={form[key]} onChange={(e) => update(key, e.target.value)} placeholder={placeholder}
        className="h-[54px] w-full rounded-xl border border-[#D5D5E5] bg-white pl-10 pr-3 text-sm text-[#17182B] outline-none focus:border-[#8957FF] focus:ring-2 focus:ring-[#8957FF]/10" required />
    </div>
  );

  return (
    <div className="app-container min-h-screen bg-white">
      <div className="flex min-h-screen w-full flex-col px-6">
        <StatusBar />
        <img src={workmateLogo} alt="Work Mate" className="mx-auto mt-8 w-[150px]" />
        <h1 className="mt-8 text-2xl font-bold text-[#202020]">Create Account</h1>
        <p className="mt-2 text-[13px] text-[#777]">Create your account to get started with Work Mate.</p>

        <form onSubmit={handleSubmit} className="mt-7 flex flex-col gap-5">
          <div>
            <label className="form-label">Email Address</label>
            {iconInput(Mail, "Enter your email address", "email", "email")}
          </div>
          <div>
            <label className="form-label">Phone Number</label>
            <div className="flex w-full gap-2">
              <select value={form.countryCode} onChange={(e) => update("countryCode", e.target.value)}
                className="h-[54px] w-[105px] shrink-0 rounded-xl border border-[#D5D5E5] bg-white px-2 text-xs text-[#17182B] outline-none focus:border-[#8957FF]">
                <option value="+91">IND +91</option>
                <option value="+1">USA +1</option>
                <option value="+44">UK +44</option>
              </select>
              <input type="tel" value={form.phone} onChange={(e) => update("phone", e.target.value)}
                placeholder="Enter phone number" autoComplete="tel-national" inputMode="numeric"
                className="h-[54px] min-w-0 flex-1 rounded-xl border border-[#D5D5E5] bg-white px-3 text-sm text-[#17182B] outline-none focus:border-[#8957FF] focus:ring-2 focus:ring-[#8957FF]/10" required />
            </div>
          </div>
          <div>
            <label className="form-label">Company ID</label>
            {iconInput(Building2, "Enter your company ID", "companyId")}
          </div>
          <div>
            <label className="form-label">Password</label>
            <PasswordInput label="" value={form.password} onChange={(e) => update("password", e.target.value)} />
          </div>
          <div>
            <label className="form-label">Confirm Password</label>
            <PasswordInput label="" value={form.confirmPassword} onChange={(e) => update("confirmPassword", e.target.value)} />
          </div>

          <div className="flex items-start gap-2">
            <input type="checkbox" checked={agreed} onChange={(e) => setAgreed(e.target.checked)} className="mt-1 h-4 w-4 shrink-0 accent-[#7A5AF8]" />
            <p className="text-xs leading-5 text-[#667085]">
              I agree to the{" "}
              <button type="button" onClick={() => navigate("/terms-and-privacy")} className="font-semibold text-[#7A5AF8]">Terms & Conditions</button>
              {" "}and{" "}
              <button type="button" onClick={() => navigate("/terms-and-privacy")} className="font-semibold text-[#7A5AF8]">Privacy Policy</button>
            </p>
          </div>

          {error && <p className="text-xs text-red-500">{error}</p>}
          <Button type="submit" className="w-full">sign up</Button>
        </form>

        <p className="mt-6 pb-8 text-center text-[13px] text-[#667085]">
          Already have an account?{" "}
          <button type="button" onClick={() => navigate("/signin")} className="font-semibold text-[#7A5AF8]">Sign In</button>
        </p>
      </div>
    </div>
  );
}
