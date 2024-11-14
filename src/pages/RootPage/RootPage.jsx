import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Toaster } from "react-hot-toast";

const RootPage = () => {
  return (
    <>
      <div>
        <Navbar></Navbar>
        <div className="min-h-[calc(100vh-320px)]">
          <Outlet></Outlet>
        </div>
        <Footer></Footer>
      </div>
      <Toaster />
    </>
  );
};

export default RootPage;
