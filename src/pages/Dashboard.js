import { Topbar, Footer } from "../components";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div id="dashboard">
      <Topbar />
      <Outlet/>
      <Footer />
    </div >
  );
};

export default Dashboard;
