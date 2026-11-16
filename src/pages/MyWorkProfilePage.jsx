
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import {
  ChevronLeft, ChevronRight, BriefcaseBusiness, Package, Wallet, Users,
  LockKeyhole, Clock, ShieldCheck, LogOut, Check, Signal, BatteryFull,
  Mail, MapPin, Award,
} from "lucide-react";

function ProfileRow({ icon: Icon, children, onClick, danger }) {
  return (
    <button type="button" onClick={onClick} className={`flex h-9 w-full items-center gap-3 text-left ${danger ? "text-[#F04438]" : "text-[#4F5464]"}`}>
      <Icon size={18} strokeWidth={1.7} />
      <span className="flex-1 text-[12px] font-medium">{children}</span>
      <ChevronRight size={16} className="text-[#98A2B3]" />
    </button>
  );
}

export default function MyWorkProfilePage() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const [profile, setProfile] = useState({ firstName: "Tonald", lastName: "Drump", city: "" });
  const [photo, setPhoto] = useState("");

  useEffect(() => {
    setProfile((prev) => ({ ...prev, ...JSON.parse(localStorage.getItem("workmate_profile") || "{}") }));
    setPhoto(localStorage.getItem("workmate_profile_photo") || "");
  }, []);

  const fullName = `${profile.firstName} ${profile.lastName}`.trim();
  const email = user?.email || "Tonald@gmail.com";

  const sections = [
    { title: "ACCOUNT", items: [
      [BriefcaseBusiness, "My Work Profile", () => navigate("/profile")],
      [Package, "Office Assets", () => navigate("/home")],
      [Wallet, "Payroll & Tax", () => navigate("/home")],
      [Users, "Roles", () => navigate("/home")],
    ]},
    { title: "SETTINGS", items: [
      [LockKeyhole, "Change Password", () => navigate("/signin")],
      [Clock, "Versioning", () => {}],
      [ShieldCheck, "Terms & Privacy", () => navigate("/terms-and-privacy")],
      [LogOut, "Logout", () => { logout(); navigate("/signin"); }, true],
    ]},
  ];

  return (
    <div className="app-container min-h-screen bg-white text-[#344054]">
      <div className="relative bg-[#7A5AF8] text-white">
        <div className="flex h-10 items-center justify-between px-5 pt-1">
          <span className="text-[17px] font-semibold">9:41</span>
          <div className="flex items-center gap-1.5"><Signal size={16} /><BatteryFull size={20} /></div>
        </div>
        <header className="mx-[15px] flex h-8 items-center justify-between">
          <button onClick={() => navigate(-1)}><ChevronLeft size={24} /></button>
          <h1 className="text-[18px] font-semibold">My Profile</h1>
          <span className="w-6" />
        </header>
        <div className="relative h-[86px]">
          <div className="absolute left-1/2 top-[26px] z-10 flex h-[120px] w-[120px] -translate-x-1/2 items-center justify-center rounded-xl border-2 border-white bg-[#FAFAFF]">
            <div className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-full border border-[#9B8AFB] bg-[#EBE9FE]">
              {photo ? <img src={photo} alt="Profile" className="h-full w-full object-cover" /> : <Users size={32} className="text-[#7950FF]" />}
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center bg-white pb-5 pt-[66px]">
        <div className="flex items-center gap-1.5">
          <h2 className="text-[16px] font-semibold text-[#101828]">{fullName}</h2>
          <span className="flex h-[17px] w-[17px] items-center justify-center rounded-full bg-[#7A5AF8]"><Check size={12} strokeWidth={3} className="text-white" /></span>
        </div>
        <p className="mt-1 text-[13px] font-medium text-[#7A5AF8]">{email}</p>
      </div>

      <main className="mx-[15px] mt-5 space-y-5">
        <button onClick={() => navigate("/achievements")} className="flex h-12 w-full items-center gap-3 rounded-xl bg-[#F4F6F9] px-4">
          <Award size={19} className="text-[#7950FF]" />
          <span className="flex-1 text-left text-[12px] font-semibold">Achievements</span>
          <ChevronRight size={16} className="text-[#98A2B3]" />
        </button>

        <section>
          <h3 className="mb-2 text-[12px] font-semibold tracking-[-0.5px] text-[#344054]">CONTACT</h3>
          <div className="rounded-xl bg-[#F4F6F9] px-4 py-5">
            <div className="flex min-h-5 items-center gap-2">
              <Mail size={18} className="shrink-0 text-[#4F5464]" />
              <span className="break-all text-[11px] font-medium leading-5 text-[#4F5464]">{email}</span>
            </div>
            <div className="mt-3 flex min-h-5 items-center gap-2">
              <MapPin size={18} className="shrink-0 text-[#7A5AF8]" />
              <span className="text-[11px] font-medium leading-5 text-[#4F5464]">{profile.city || "City not added"}</span>
            </div>
          </div>
        </section>

        {sections.map(({ title, items }) => (
          <section key={title}>
            <h3 className="mb-2 text-[12px] font-semibold text-[#344054]">{title}</h3>
            <div className="rounded-xl bg-[#F4F6F9] px-4 py-3">
              {items.map(([Icon, label, action, danger]) => <ProfileRow key={label} icon={Icon} onClick={action} danger={danger}>{label}</ProfileRow>)}
            </div>
          </section>
        ))}
      </main>
    </div>
  );
}
