export const NavBar = () => {
  return (
    <nav className="bg-gray-50 flex items-center h-14 px-5 shadow-lg">
      <div className="font-bold italic font-serif text-xl text-gray-800">
        Sales
      </div>
      <div className="flex-grow"></div>
      <div className="flex items-center">
        <input
          className="outline-none py-1 px-3 border border-gray-300"
          placeholder="Search something... "
        />
        <button className="bg-red-400 hover:bg-red-500 transition-colors py-1 px-3 bold text-gray-50">
          Search
        </button>
      </div>
      <ul className="flex flex-row items-center ml-5 gap-4">
        <li className="flex">
          <button>
            <svg
              className="h-5 text-gray-900"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </li>
        <li>
          <a href="#" className="flex-shrink-0 h-10 w-10">
            <img
              className="h-10 w-10 rounded-full shadow-md"
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=60"
              alt=""
            />
          </a>
        </li>
      </ul>
    </nav>
  );
};
