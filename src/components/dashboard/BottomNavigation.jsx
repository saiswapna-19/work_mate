import {
  Home,
  CalendarDays,
  ClipboardList,
  MessageSquare,
  Settings,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const navItems = [
  { label: "Home", icon: Home, path: "/home" },
  { label: "Meetings", icon: CalendarDays, path: "/home" },
  { label: "Tasks", icon: ClipboardList, path: "/home" },
  { label: "Chat", icon: MessageSquare, path: "/home" },
  { label: "Profile", icon: Settings, path: "/profile" },
];

function BottomNavigation() {
  const navigate = useNavigate();

  return (
    <div className="fixed bottom-0 left-1/2 flex w-full max-w-[390px] -translate-x-1/2 justify-around border-t border-gray-100 bg-white px-2 py-3">
      {navItems.map((item, index) => {
        const Icon = item.icon;

        return (
          <button
            key={item.label}
            onClick={() => navigate(item.path)}
            className={`flex flex-col items-center gap-1 ${
              index === 0 ? "text-primary" : "text-gray-400"
            }`}
          >
            <Icon size={19} />
            <span className="text-[9px]">{item.label}</span>
          </button>
        );
      })}
    </div>
  );
}

export default BottomNavigation;