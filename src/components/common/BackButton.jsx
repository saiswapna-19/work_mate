
import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function BackButton({ to }) {
  const navigate = useNavigate();

  return (
    <button
      type="button"
      onClick={() => navigate(to || -1)}
      className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-50 text-primary"
    >
      <ChevronLeft size={20} />
    </button>
  );
}
