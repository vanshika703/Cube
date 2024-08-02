import {
  Dispatch,
  SetStateAction,
  useEffect,
  useRef,
  useCallback,
} from "react";
import { User } from "../types";

const CustomerSidebar = ({
  users,
  selectedUser,
  setSelectedUser,
  loadMoreUsers,
}: {
  users: User[];
  selectedUser: User | null;
  setSelectedUser: Dispatch<SetStateAction<User | null>>;
  loadMoreUsers: () => void;
}) => {
  // useEffect(() => {
  //   setSelectedUser(users[0]);
  // }, []);

  const observer = useRef<IntersectionObserver | null>(null);
  const lastUserElementRef = useCallback(
    (node: any) => {
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          loadMoreUsers();
        }
      });
      if (node) observer.current.observe(node);
    },
    [loadMoreUsers]
  );

  return (
    <div className="w-1/4 h-[95vh] overflow-scroll">
      {users?.map((user: User, index: number) => {
        if (users.length === index + 1) {
          return (
            <div
              ref={lastUserElementRef}
              onClick={() => setSelectedUser(user)}
              key={user?.email}
              className={
                (selectedUser?.email === user?.email
                  ? " border-r-2 border-r-blue-400 bg-gray-100 "
                  : "") +
                "flex justify-start items-center p-4 gap-4 border-b cursor-pointer bg-gray-50 hover:bg-blue-100 transition-all "
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
        } else {
          return (
            <div
              onClick={() => setSelectedUser(user)}
              key={user?.email}
              className={
                (selectedUser?.email === user?.email
                  ? "border-r-2 border-r-blue-400 bg-gray-100 "
                  : "") +
                "flex justify-start items-center p-4 gap-4 border-b cursor-pointer bg-gray-50 hover:bg-gray-100 transition-all "
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
        }
      })}
    </div>
  );
};

export default CustomerSidebar;
