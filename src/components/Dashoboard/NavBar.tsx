import { Bell, Search } from "lucide-react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { clearToken } from "../../redux/authSlice";

export const NavBar = () => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(clearToken());
  };
  return (
    <nav className="bg-gray-50 flex items-center h-20 px-5 shadow-lg">
      <div className="relative flex items-center w-2/5">
        <input
          className="bg-[#F0F5FA] w-full outline-none py-3 px-4 border border-gray-300 pr-10 rounded-lg"
          placeholder="Search"
        />
        <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
          <Search size={20} color="gray" />
        </div>
      </div>
      <div className="flex-grow"></div>
      <ul className="flex gap-16 flex-row items-center ml-5 mr-6">
        <li className="flex">
          <button>
            <Bell color="gray" />
          </button>
        </li>
        <li className="relative group">
          <Link to="#" className="flex-shrink-0 h-16 w-16 relative">
            <img
              className="h-14 w-14 rounded-full shadow-md"
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=60"
              alt=""
            />
            <div className="absolute  top-14 left-1/2 transform -translate-x-1/2 hidden bg-white p-2 rounded-lg shadow-md group-hover:block">
              <button
                onClick={handleLogout}
                className="bg-indigo-400 hover:bg-indigo-500 px-8 py-1 rounded-lg text-white font-medium"
              >
                Logout
              </button>
            </div>
          </Link>
        </li>
      </ul>
    </nav>
  );
};
