import React from "react";
import { Link } from "react-router-dom";
import { LayoutGrid, User, PcCase} from 'lucide-react';
const Sidebar: React.FC = () => {
  return (
    <aside className="bg-white  w-60 min-h-screen flex-shrink-0 flex flex-col border-r-4 border-[#adb3b8] ">
      <div className="mx-auto mt-5 mb-8">
        <img className="w-36" src="https://res.cloudinary.com/dub6q8hhb/image/upload/v1699130468/Group_5_jyy2ng.png" alt="logo" />
      </div>
      <p className="px-5 py-3 ml-5">PAGES</p>
      <div className="px-1 ml-5"> 
          <Link to="#" className="px-3 my-2 flex gap-2 items-start	rounded-lg bg-[#F0F5FA] py-4 transition-colors duration-200 relative  text-lg font-medium text-black">
           <LayoutGrid className="mt-1"/>
            Dashboard
          </Link>
          <Link to="#" className="px-3 my-2 flex gap-2 items-start	rounded-lg bg-[#F0F5FA] py-4 transition-colors duration-200 relative  text-lg font-medium text-black">
            <User className="mt-1"/>
            User
          </Link>
          <Link to="#" className="px-3 my-2 flex gap-2 items-start	rounded-lg bg-[#F0F5FA] py-4 transition-colors duration-200 relative  text-lg font-medium text-black">
            <PcCase className="mt-1"/>
            Sales
          </Link>
      </div>
    </aside>
  );
};

export default Sidebar;
