
import { BriefcaseBusiness } from "lucide-react";

export default function Logo() {
  return (
    <div className="flex flex-col items-center">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-white shadow-lg">
        <BriefcaseBusiness size={23} />
      </div>

      <h2 className="mt-2 text-sm font-bold text-gray-900">Work Mate</h2>
      <p className="mt-1 text-[10px] text-gray-500">
        Register Using Your Credentials
      </p>
    </div>
  );
}
