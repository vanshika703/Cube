import { Dispatch, SetStateAction, useEffect } from "react";
import { User } from "../types";

const CustomerSidebar = ({
  users,
  selectedUser,
  setSelectedUser,
}: {
  users: User[];
  selectedUser: User | null;
  setSelectedUser: Dispatch<SetStateAction<User | null>>;
}) => {
  return (
    <div className=" w-1/4 h-[95vh] overflow-scroll">
      {users?.map((user: any) => {
        return (
          <div
            onClick={() => setSelectedUser(user)}
            key={user?.email}
            className={
              (selectedUser?.email === user?.email
                ? "  border-r-2 border-r-blue-500 bg-gray-100"
                : "") +
              " flex justify-start items-center p-4 gap-4 border-b cursor-pointer bg-gray-50 hover:bg-gray-100 transition-all "
            }
          >
            <img
              src={user?.picture?.medium}
              alt={user?.name?.first}
              className="w-12 h-12 rounded-full"
            />
            <div>
              <p className="text-sm font-semibold text-gray-800">
                {user?.name?.title} {user?.name?.first} {user?.name?.last}
              </p>
              <p className="text-sm text-gray-500">{user?.email}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CustomerSidebar;
