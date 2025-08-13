import Header from "./Header";
import { Outlet } from "react-router";
import useOnlineStatus from "../utils/custom-hooks/useOnlineStatus";
import { useEffect, useState } from "react";
import UserContext from "../utils/contexts/UserContext";

const AppLayout = () => {
  const [userName, setUserName] = useState("");
  const onlineStatus = useOnlineStatus();

  useEffect(() => {
    setUserName("Gaurav");
  }, []);

  return !onlineStatus ? (
    <h1>No Internet Connection Found</h1>
  ) : (
    <UserContext.Provider value={{ userName, setUserName }}>
      <div className="bg-white">
        <Header />
        <Outlet />
      </div>
    </UserContext.Provider>
  );
};

export default AppLayout;
