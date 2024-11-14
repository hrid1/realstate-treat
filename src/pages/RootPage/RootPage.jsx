import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Toaster } from "react-hot-toast";

const RootPage = () => {
  return (
    <>
      <div>
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
      </div>
      <Toaster />
    </>
  );
};

export default RootPage;
