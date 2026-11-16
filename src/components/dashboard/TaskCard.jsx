
import { CalendarDays, MessageCircle } from "lucide-react";

function TaskCard({ task = {} }) {
  const title = task.title || task.name || "Work Task";
  const progress = Number(task.progress ?? 0);
  const priority = task.priority || "Medium";
  const status = task.status || "Pending";
  const dueDate = task.dueDate || task.date || "Today";
  const comments = task.comments || 0;

  return (
    <div className="rounded-xl bg-white p-3 shadow-sm">
      <div className="flex items-start justify-between gap-2">
        <h3 className="text-[10px] font-bold text-[#25263A]">{title}</h3>
        <span className="rounded-full bg-[#FFF3E8] px-2 py-1 text-[8px] text-[#F59A45]">
          {priority}
        </span>
      </div>

      <div className="mt-2 flex items-center justify-between text-[8px] text-gray-400">
        <span>{status}</span>
        <span>{progress}%</span>
      </div>

      <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-[#EEEAF8]">
        <div
          className="h-full rounded-full bg-[#8056FF]"
          style={{ width: `${Math.min(100, Math.max(0, progress))}%` }}
        />
      </div>

      <div className="mt-3 flex items-center justify-between text-[8px] text-gray-400">
        <span className="flex items-center gap-1"><CalendarDays size={10} /> {dueDate}</span>
        <span className="flex items-center gap-1"><MessageCircle size={10} /> {comments} Comments</span>
      </div>
    </div>
  );
}

export default TaskCard;
