import { useEffect, useState } from "react";
import CustomerDetails from "./CustomerDetails";
import CustomerSidebar from "./CustomerSidebar";
import Header from "./Header";

import { User } from "../types";

const MainBody = () => {
  const [allUsers, setAllUsers] = useState<User[]>([]);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [initialFetchDone, setInitialFetchDone] = useState<boolean>(false);

  const fetchUsers = async () => {
    try {
      const response = await fetch("https://randomuser.me/api/?results=10");
      const data = await response.json();
      setAllUsers((prevUsers) => [...prevUsers, ...data.results]);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const fetchInitialUsers = async () => {
      try {
        const response = await fetch("https://randomuser.me/api/?results=10");
        const data = await response.json();
        setAllUsers(data.results);
        setSelectedUser(data.results[0]);
        setInitialFetchDone(true);
      } catch (error) {
        console.error(error);
      }
    };

    if (!initialFetchDone) {
      fetchInitialUsers();
    }
  }, [initialFetchDone]);

  useEffect(() => {
    if (initialFetchDone) {
      fetchUsers();
    }
  }, [initialFetchDone]);

  return (
    <div>
      <Header />
      <div className="w-full h-[95vh] flex overflow-scroll">
        <CustomerSidebar
          users={allUsers}
          selectedUser={selectedUser}
          setSelectedUser={(userId) => setSelectedUser(userId)}
          loadMoreUsers={fetchUsers}
        />
        <CustomerDetails selectedUser={selectedUser} />
      </div>
    </div>
  );
};

export default MainBody;
