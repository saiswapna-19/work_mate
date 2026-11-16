
import { Clock, Users, Video } from "lucide-react";

function MeetingCard({ meeting = {} }) {
  const title = meeting.title || meeting.name || "Team Meeting";
  const time = meeting.time || meeting.startTime || "10:30 AM";
  const date = meeting.date || "Today";
  const members = meeting.members || 0;

  return (
    <div className="flex items-center gap-3 rounded-xl bg-white p-3 shadow-sm">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#F0EAFE] text-[#8056FF]">
        <Video size={17} />
      </div>

      <div className="min-w-0 flex-1">
        <h3 className="truncate text-[10px] font-bold text-[#25263A]">{title}</h3>
        <div className="mt-1 flex flex-wrap items-center gap-2 text-[8px] text-gray-400">
          <span className="flex items-center gap-1"><Clock size={10} /> {time}</span>
          <span>{date}</span>
          <span className="flex items-center gap-1"><Users size={10} /> {members}</span>
        </div>
      </div>

      <button
        type="button"
        className="shrink-0 rounded-full bg-[#8056FF] px-3 py-1.5 text-[8px] font-semibold text-white"
      >
        Join Now
      </button>
    </div>
  );
}

export default MeetingCard;
