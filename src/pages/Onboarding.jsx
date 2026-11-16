
import { useNavigate } from "react-router-dom";
import Button from "../components/common/Button";
import StatusBar from "../components/common/StatusBar";
import todayTask from "../assets/images/today-task.png";
import workingPeriod from "../assets/images/working-period.png";

export default function Onboarding() {
  const navigate = useNavigate();

  return (
    <div className="app-container min-h-screen overflow-x-hidden bg-[#FAFAFF]">
      <div className="relative flex min-h-screen flex-col">
        <div className="relative h-[62vh] min-h-[480px] max-h-[530px] w-full shrink-0 overflow-hidden bg-gradient-to-b from-[#7951F7] via-[#A68AFF] to-[#F4F0FF]">
          <StatusBar className="!text-white" />
          <img src={todayTask} alt="Today Task" className="absolute left-[10%] top-[105px] z-10 h-[173.41px] w-[74%] object-fill" />
          <img src={workingPeriod} alt="Working Period" className="absolute left-[1.5%] top-[178px] z-20 h-[329.55px] w-[97%] -rotate-2 object-fill" />
        </div>

        <div className="flex flex-1 flex-col items-center bg-[#FAFAFF] px-7 pb-8 pt-8 text-center">
          <h1 className="text-[20px] font-bold leading-[27px] text-[#17182B]">Navigate Your Work Journey<br />Efficient & Easy</h1>
          <p className="mt-3 text-xs leading-[18px] text-gray-500">Increase your work management & career<br />development radically.</p>
          <div className="mt-8 w-full space-y-3">
            <Button onClick={() => navigate("/signin")}>Sign In</Button>
            <Button variant="outline" onClick={() => navigate("/signup")}>Sign Up</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
