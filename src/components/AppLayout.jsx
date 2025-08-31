import Header from "./Header";
import { Outlet } from "react-router";
import useOnlineStatus from "../utils/custom-hooks/useOnlineStatus";
import { useEffect, useState } from "react";
import UserContext from "../utils/contexts/UserContext";
import { store } from "../utils/redux/store";
import { Provider } from "react-redux";

const AppLayout = () => {
  const [userName, setUserName] = useState("");
  const onlineStatus = useOnlineStatus();

  useEffect(() => {
    setUserName("Gaurav");
  }, []);

  return !onlineStatus ? (
    <h1>Oops! Looks like you are offline!</h1>
  ) : (
    <Provider store={store}>
      <UserContext.Provider value={{ userName, setUserName }}>
        <div className="bg-white">
          <Header />
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
  );
};

export default AppLayout;
