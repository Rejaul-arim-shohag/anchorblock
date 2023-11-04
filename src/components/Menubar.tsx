import React from "react";

export const Menubar: React.FC = () => {
  return (
    <nav className="bg-white border-gray-200">
      <div className="container flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="https://flowbite.com/" className="flex items-center">
          <img src="https://res.cloudinary.com/dub6q8hhb/image/upload/v1699130468/Group_5_jyy2ng.png" className="h-8 mr-3" alt="Flowbite Logo" />
          
        </a>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <select
            id="countries"
            className="bg-slate-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option selected>English(UK)</option>
          </select>
        </div>
      </div>

    </nav>
  );
};
