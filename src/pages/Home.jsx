
import HomeHeader from "../components/dashboard/HomeHeader";
import SummaryCard from "../components/dashboard/SummaryCard";
import MeetingCard from "../components/dashboard/MeetingCard";
import TaskCard from "../components/dashboard/TaskCard";
import BottomNavigation from "../components/dashboard/BottomNavigation";
import StatusBar from "../components/common/StatusBar";
import meetings from "../data/meetings";
import tasks from "../data/tasks";
import { CalendarDays, ClipboardList, Users } from "lucide-react";

function EmptyState({ icon: Icon, title, description }) {
  return (
    <div className="rounded-xl bg-white px-4 py-5 text-center shadow-sm">
      <div className="mx-auto mb-3 grid w-fit grid-cols-3 gap-1 rounded-lg bg-[#F5F2FF] p-2">
        {Array.from({ length: 6 }, (_, i) => (
          <div key={i} className="flex h-7 w-7 items-center justify-center rounded-md bg-[#EAE3FF]">
            <Users size={11} className="text-[#B8A4FF]" />
          </div>
        ))}
      </div>
      <div className="mx-auto mb-2 flex h-7 w-7 items-center justify-center rounded-full bg-[#F1EDFF] text-[#8056FF]">
        <Icon size={15} />
      </div>
      <h3 className="text-[11px] font-bold text-[#25263A]">{title}</h3>
      <p className="mt-1 text-[9px] text-gray-400">{description}</p>
    </div>
  );
}

function HomeSection({ title, subtitle, items, Card, itemProp, icon, emptyTitle, emptyDescription }) {
  return (
    <section className="mt-5">
      <div className="mb-2 flex items-center justify-between">
        <div>
          <h2 className="text-xs font-bold text-[#25263A]">{title}</h2>
          <p className="text-[9px] text-gray-400">{subtitle}</p>
        </div>
        <span className="rounded-full bg-[#F1EDFF] px-2 py-1 text-[9px] text-[#8056FF]">{items.length}</span>
      </div>
      {items.length ? (
        <div className="space-y-2">
          {items.map((item, index) => <Card key={item.id || index} {...{ [itemProp]: item }} />)}
        </div>
      ) : (
        <EmptyState icon={icon} title={emptyTitle} description={emptyDescription} />
      )}
    </section>
  );
}

export default function Home() {
  return (
    <div className="app-container min-h-screen bg-[#FAFAFF] pb-24">
      <StatusBar />
      <div className="px-4">
        <HomeHeader />
        <div className="mt-4"><SummaryCard /></div>
        <HomeSection title="Today Meeting" subtitle="Your schedule for the day" items={meetings} Card={MeetingCard} itemProp="meeting" icon={CalendarDays} emptyTitle="No Meeting Available" emptyDescription="There is no meeting scheduled for today." />
        <HomeSection title="Today Task" subtitle="Your tasks for the day" items={tasks} Card={TaskCard} itemProp="task" icon={ClipboardList} emptyTitle="No Task Available" emptyDescription="You don't have any tasks assigned for today." />
      </div>
      <BottomNavigation />
    </div>
  );
}
