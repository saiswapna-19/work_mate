import { Bell, MessageSquare, UserRound } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

function HomeHeader() {
  const navigate = useNavigate();
  const { user } = useAuth();

  return (
    <div className="flex items-center justify-between bg-white px-4 py-4">
      <button
        onClick={() => navigate("/profile")}
        className="flex items-center gap-2"
      >
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-100 text-primary">
          <UserRound size={22} />
        </div>

        <div className="text-left">
          <h3 className="text-xs font-bold">
            {user?.firstName || "Welcome User"}
          </h3>
          <p className="text-[9px] text-primary">
            {user?.position || "Work Mate"}
          </p>
        </div>
      </button>

      <div className="flex gap-3">
        <button className="rounded-full bg-purple-50 p-2 text-primary">
          <MessageSquare size={17} />
        </button>

        <button className="rounded-full bg-purple-50 p-2 text-primary">
          <Bell size={17} />
        </button>
      </div>
    </div>
  );
}

export default HomeHeader;