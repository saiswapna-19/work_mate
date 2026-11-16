
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import {
  ChevronLeft, ChevronRight, BriefcaseBusiness, Package, Wallet,
  Users, LockKeyhole, Clock, ShieldCheck, LogOut, Check, Signal, BatteryFull,
} from "lucide-react";

const achievements = [
  ["Probation Silver", "#8BEA9C", "▣"],
  ["Junior Of The Month", "#A6A3FF", "★"],
  ["Employee Of The Year", "#FFC27D", "★"],
  ["Top Performer", "#F477A4", "◆"],
];

function ProfileRow({ icon: Icon, children, onClick, danger }) {
  return (
    <button type="button" onClick={onClick} className={`flex h-9 w-full items-center gap-3 text-left ${danger ? "text-[#F04438]" : "text-[#4F5464]"}`}>
      <Icon size={18} strokeWidth={1.7} />
      <span className="flex-1 text-[12px] font-medium">{children}</span>
      <ChevronRight size={16} className="text-[#98A2B3]" />
    </button>
  );
}

export default function AchievementsPage() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const [profile, setProfile] = useState({ firstName: "Tonald", lastName: "Drump" });
  const [photo, setPhoto] = useState("");

  useEffect(() => {
    setProfile((prev) => ({ ...prev, ...JSON.parse(localStorage.getItem("workmate_profile") || "{}") }));
    setPhoto(localStorage.getItem("workmate_profile_photo") || "");
  }, []);

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
    <div className="app-container min-h-screen overflow-x-hidden bg-white text-[#344054]">
      <div className="relative bg-[#7A5AF8] text-white">
        <div className="flex h-10 items-center justify-between px-5 pt-1">
          <span className="text-[17px] font-semibold">9:41</span>
          <div className="flex items-center gap-1.5"><Signal size={16} /><BatteryFull size={20} /></div>
        </div>
        <header className="mx-[15px] flex h-8 items-center justify-between">
          <button onClick={() => navigate("/my-work-profile")}><ChevronLeft size={24} /></button>
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
          <h2 className="text-[16px] font-semibold text-[#101828]">{`${profile.firstName || ""} ${profile.lastName || ""}`.trim()}</h2>
          <span className="flex h-[17px] w-[17px] items-center justify-center rounded-full bg-[#7A5AF8]"><Check size={12} strokeWidth={3} className="text-white" /></span>
        </div>
        <p className="mt-1 text-[13px] font-medium text-[#7A5AF8]">{email}</p>
      </div>

      <main className="mx-[15px] mt-5 space-y-5">
        <section>
          <h3 className="mb-2 h-[15px] font-['Inter'] text-[12px] font-semibold leading-[15px] tracking-[-0.5px] text-[#344054]">Achievements</h3>
          <div className="flex h-[72px] w-full items-start justify-between gap-2">
            {achievements.map(([title, color, icon], index) => (
              <div key={title} className="flex h-[72px] min-w-0 flex-1 flex-col items-center gap-2">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center text-[20px] text-white" style={{ backgroundColor: color, clipPath: "polygon(50% 0%, 90% 23%, 90% 77%, 50% 100%, 10% 77%, 10% 23%)" }}>{icon}</div>
                <p className="h-6 text-center font-['Inter'] text-[10px] font-medium leading-[10px] tracking-[-0.5px] text-[#344054]">
                  {[
                    <>Probation<br />Silver</>,
                    <>Junior Of<br />The Month</>,
                    <>Employee Of<br />The Year</>,
                    <>Top<br />Performer</>,
                  ][index]}
                </p>
              </div>
            ))}
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
