import Header from "./Header";
import { Outlet } from "react-router";
import useOnlineStatus from "../utils/custom-hooks/useOnlineStatus";

const AppLayout = () => {
  const onlineStatus = useOnlineStatus();

  return !onlineStatus ? (
    <h1>No Internet Connection Found</h1>
  ) : (
    <div className="bg-white">
      <Header />
      <Outlet />
    </div>
  );
};

export default AppLayout;
