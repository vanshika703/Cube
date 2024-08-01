import { useEffect, useState } from "react";
import CustomerDetails from "./CustomerDetails";
import CustomerSidebar from "./CustomerSidebar";
import Header from "./Header";

const MainBody = () => {
  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await fetch("https://randomuser.me/api?results=10");
      const data = await response?.json();
      setAllUsers(data?.results);
    } catch (error) {
      console.error(error);
    }
  };

  console.log("allUsers", allUsers)

  return (
    <div>
      <Header />
      <div className="w-full h-[95vh] flex overflow-scroll">
        <CustomerSidebar />
        <CustomerDetails />
      </div>
    </div>
  );
};

export default MainBody;
