import React, { ReactNode} from "react";
import Sidebar from "./Sidebar";
import { NavBar } from "./NavBar";

type DashboardLayoutProps = {
  children: ReactNode;
};

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <div className="flex bg-purple-300 h-full w-full">
      <Sidebar />
      <div className="bg-white flex flex-col flex-grow">
        <NavBar />
        <main className="mx-10 my-12">{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
