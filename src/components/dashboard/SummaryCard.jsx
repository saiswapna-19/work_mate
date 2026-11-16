import { ArrowUpRight } from "lucide-react";

function SummaryCard() {
  return (
    <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-[#895DFF] to-[#6940ED] p-4 text-white">
      <div className="relative z-10">
        <p className="text-[11px] font-medium">
          My Work Summary
        </p>

        <p className="mt-1 text-[9px] text-purple-100">
          Today's task & presence activity
        </p>

        <p className="mt-4 text-2xl font-bold">
          85%
        </p>

        <p className="text-[9px] text-purple-100">
          Overall productivity
        </p>
      </div>

      <ArrowUpRight
        size={75}
        className="absolute bottom-2 right-4 opacity-20"
      />
    </div>
  );
}

export default SummaryCard;