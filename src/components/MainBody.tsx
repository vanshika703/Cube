import { useEffect, useState } from "react";
import CustomerDetails from "./CustomerDetails";
import CustomerSidebar from "./CustomerSidebar";
import Header from "./Header";

import { User } from "../types";

const MainBody = () => {
  const [allUsers, setAllUsers] = useState<User[]>([]);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await fetch("https://randomuser.me/api?results=1000");
      const data = await response?.json();
      setAllUsers(data?.results);
      setSelectedUser(data?.results?.[0]); //
    } catch (error) {
      console.error(error);
    }
  };

  console.log("allUsers", allUsers);

  console.log("selectedUser", selectedUser);

  return (
    <div>
      <Header />
      <div className="w-full h-[95vh] flex overflow-scroll">
        <CustomerSidebar
          users={allUsers}
          selectedUser={selectedUser}
          setSelectedUser={(userId) => setSelectedUser(userId)}
        />
        <CustomerDetails selectedUser={selectedUser} />
      </div>
    </div>
  );
};

export default MainBody;
