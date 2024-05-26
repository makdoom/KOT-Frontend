import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { useState } from "react";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);

  return (
    <div className="w-screen h-screen overflow-hidden">
      <div className="flex">
        <div
          className={`transition-all ${isSidebarOpen ? "w-[250px] min-w-[250px] p-2" : "min-w-0 w-0"} border-r min-h-screen`}
        >
          <Sidebar isSidebarOpen={isSidebarOpen} />
        </div>

        <div className="flex flex-col w-full">
          <Header isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
          <Outlet />
        </div>
      </div>
    </div>
  );
};
export default DashboardLayout;
