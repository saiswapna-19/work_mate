
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Camera, CalendarDays, UserRound, BriefcaseBusiness, MapPin, Check, X, ChevronDown } from "lucide-react";

const positions = ["Junior Full Stack Developer", "Frontend Developer", "Backend Developer", "Full Stack Developer", "UI/UX Designer", "Software Engineer", "Project Manager", "Other"];
const initialForm = { firstName: "Tonald", lastName: "Drump", dob: "", position: "", city: "" };
const inputStyle = "h-11 w-full rounded-lg border border-[#D0D5DD] bg-white px-3 text-sm text-[#344054] outline-none focus:border-[#7950FF]";

export default function MyProfile() {
  const navigate = useNavigate();
  const [form, setForm] = useState(initialForm);
  const [photo, setPhoto] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    setForm((prev) => ({ ...prev, ...JSON.parse(localStorage.getItem("workmate_profile") || "{}") }));
    setPhoto(localStorage.getItem("workmate_profile_photo") || "");
  }, []);

  const change = (e) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const upload = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (!["image/jpeg", "image/png"].includes(file.type)) return alert("Please select a JPG or PNG image.");
    if (file.size > 5 * 1024 * 1024) return alert("Image size must be less than 5MB.");
    const reader = new FileReader();
    reader.onload = () => setPhoto(reader.result);
    reader.readAsDataURL(file);
  };

  const save = () => {
    if (!form.firstName.trim() || !form.lastName.trim()) return alert("Please enter your name.");
    const completedProfile = { ...form, profileCompleted: true };
    localStorage.setItem("workmate_profile", JSON.stringify(completedProfile));
    localStorage.setItem("workmate_profile_photo", photo);
    setForm(completedProfile);
    setSuccess(true);
  };

  const field = (label, name, placeholder, Icon, type = "text") => (
    <div>
      <label className="mb-2 block text-sm font-medium">{label}</label>
      <div className="relative">
        {Icon && <Icon size={18} className="absolute left-3 top-3 text-[#98A2B3]" />}
        <input type={type} name={name} value={form[name]} onChange={change} placeholder={placeholder} className={`${inputStyle} ${Icon ? "pl-10" : ""}`} />
      </div>
    </div>
  );

  return (
    <div className="app-container min-h-screen bg-white px-5 pb-28 text-[#344054]">
      <header className="flex h-16 items-center gap-4">
        <button onClick={() => navigate(-1)} aria-label="Go back"><ArrowLeft size={23} /></button>
        <h1 className="text-lg font-semibold">My Work Profile</h1>
      </header>

      <div className="mt-5 flex flex-col items-center">
        <div className="flex h-28 w-28 items-center justify-center overflow-hidden rounded-full border-2 border-[#7A5AF8] bg-[#EBE9FE]">
          {photo ? <img src={photo} alt="Profile" className="h-full w-full object-cover" /> : <UserRound size={42} className="text-[#7950FF]" />}
        </div>
        <label htmlFor="profilePhoto" className="mt-3 flex cursor-pointer items-center gap-2 text-sm font-semibold text-[#7950FF]"><Camera size={17} /> Upload Photo</label>
        <input id="profilePhoto" type="file" accept="image/png,image/jpeg" onChange={upload} className="hidden" />
      </div>

      <div className="mt-8 space-y-5">
        {field("First Name", "firstName", "Enter first name")}
        {field("Last Name", "lastName", "Enter last name")}
        {field("Date of Birth", "dob", "", CalendarDays, "date")}
        <div>
          <label className="mb-2 block text-sm font-medium">Position</label>
          <div className="relative">
            <BriefcaseBusiness size={18} className="absolute left-3 top-3 text-[#98A2B3]" />
            <select name="position" value={form.position} onChange={change} className={`${inputStyle} appearance-none pl-10 pr-10`}>
              <option value="">Select Position</option>
              {positions.map((position) => <option key={position}>{position}</option>)}
            </select>
            <ChevronDown size={18} className="pointer-events-none absolute right-3 top-3 text-[#98A2B3]" />
          </div>
        </div>
        {field("Address", "city", "Enter your city", MapPin)}
      </div>

      <div className="fixed bottom-0 left-0 right-0 mx-auto w-full max-w-[440px] bg-white p-5">
        <button onClick={save} className="h-12 w-full rounded-lg bg-[#7950FF] text-sm font-semibold text-white">Update Profile</button>
      </div>

      {success && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-5">
          <div className="relative w-full max-w-[330px] rounded-2xl bg-white p-6 text-center shadow-xl">
            <button onClick={() => setSuccess(false)} className="absolute right-4 top-4 text-[#667085]"><X size={20} /></button>
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#ECFDF3]"><Check size={30} className="text-[#12B76A]" /></div>
            <h2 className="mt-4 text-lg font-semibold text-[#101828]">Profile Updated!</h2>
            <p className="mt-2 text-sm text-[#667085]">Your work profile has been saved successfully.</p>
            <button onClick={() => navigate("/my-work-profile")} className="mt-6 h-11 w-full rounded-lg bg-[#7950FF] text-sm font-semibold text-white">Done</button>
          </div>
        </div>
      )}
    </div>
  );
}
