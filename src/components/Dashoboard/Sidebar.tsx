import React from "react";

const Sidebar: React.FC = () => {
  return (
    <aside className="bg-red-400 text-gray-50 w-52 min-h-screen flex-shrink-0 flex flex-col">
      <ul className="px-1">
        <li>
          <a
            href="#"
            className="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-50 text-gray-100"
          >
            <svg
              className="w-5 mr-2 inline-block"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012 2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
              />
            </svg>
            Dashboard
          </a>
        </li>
        <li>
          <a
            href="#"
            className="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-50 text-gray-100"
          >
            <svg
              className="w-5 mr-2 inline-block"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            Orders
          </a>
        </li>
        <li>
          <a
            href="#"
            className="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-50 text-gray-100"
          >
            <svg
              className="w-5 mr-2 inline-block"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            Products
          </a>
        </li>
        <li>
          <a
            href="#"
            className="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-50 text-gray-100"
          >
            <svg
              className="w-5 mr-2 inline-block"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
            Customers
          </a>
        </li>
        <li>
          <a
            href="#"
            className="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-50 text-gray-100"
          >
            <svg
              className="w-5 mr-2 inline-block"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
              />
            </svg>
            Reports
          </a>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
