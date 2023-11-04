import { Bell } from "lucide-react";

export const NavBar = () => {
  return (
    <nav className="bg-gray-50 flex items-center h-20 px-5 shadow-lg">
      <div className="font-bold italic font-serif  ">
        <div className="flex items-center">
          <input className="outline-none py-1 px-3 border border-gray-300" placeholder="Search something... " />
          <button className="bg-red-400 hover:bg-red-500 transition-colors py-1 px-3 bold text-gray-50">Search</button>
        </div>
      </div>
      <div className="flex-grow"></div>
      <ul className="flex gap-16 flex-row items-center ml-5 mr-6">
        <li className="flex">
          <button>
            <Bell />
          </button>
        </li>
        <li>
          <a href="#" className="flex-shrink-0 h-16 w-16">
            <img
              className="h-14 w-14 rounded-full shadow-md"
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=60"
              alt=""
            />
          </a>
        </li>
      </ul>
    </nav>
  );
};
