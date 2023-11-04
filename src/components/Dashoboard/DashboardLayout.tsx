import React, { useState } from "react";
import Sidebar from "./Sidebar";
import { NavBar } from "./NavBar";
import { Users } from "./Users";

const DashboardLayout = () => {
  return (
    <div className="flex bg-purple-300 h-full w-full">
      <Sidebar />
      <div className="bg-white flex flex-col flex-grow">
        <NavBar />
        <main className="mx-10 my-12">
          <Users />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
