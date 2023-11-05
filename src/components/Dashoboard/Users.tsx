import React, { useState } from "react";
import { useGetUsersQuery } from "../../redux/userSlice";
import ResponsivePagination from "react-responsive-pagination";
import "react-responsive-pagination/themes/classic.css";
import { BsThreeDots } from "react-icons/bs";

interface User {
  id: number;
  first_name: string;
  avatar: string;
  email: string;
}

interface SingleUsrProps {
  item: User;
}
interface PaginationProps {
  setCurrentPage: (page: number) => void;
  total_pages: number;
  page: number;
}

export const Users = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { data: users, isLoading, isError } = useGetUsersQuery(currentPage);
 
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-5">Users List</h2>
      <table className="min-w-full divide-y divide-gray-200 ">
        <thead className="bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3 text-left text-lg font-medium text-gray-500 uppercase tracking-wider">
              #ID
            </th>
            <th scope="col" className="px-6 py-3 text-left text-lg font-medium text-gray-500 uppercase tracking-wider">
              User
            </th>
            <th scope="col" className="px-6 py-3 text-left text-lg font-medium text-gray-500 uppercase tracking-wider">
              Email
            </th>
            <th scope="col" className="px-6 py-3 text-right text-lg font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap flex">
              Options
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {isLoading && <div>Loading...</div>}
          {users?.data?.map((item: any) => (
            <SingleUsr item={item} />
          ))}
        </tbody>
      </table>
      <Pagiantion setCurrentPage={setCurrentPage} total_pages={users?.total_pages} page={users?.page} />
    </div>
  );
};

export const SingleUsr: React.FC<SingleUsrProps> = ({ item }) => {
  return (
    <tr>
      <td className="px-6 py-4 whitespace-nowrap text-lg">{item.id}</td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center">
          <div className="flex-shrink-0 h-16 w-16">
            <img className="h-16 w-16 rounded-full" src={item.avatar} />
          </div>
          <div className="ml-4 text-lg">{item.first_name}</div>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-lg">{item.email}</td>
      <td className="px-6 py-4 whitespace-nowrap flex">
        <BsThreeDots />
      </td>
    </tr>
  );
};

export const Pagiantion: React.FC<PaginationProps> = ({ setCurrentPage, total_pages, page }) => {
  return <ResponsivePagination current={page} total={total_pages} onPageChange={setCurrentPage} />;
};
