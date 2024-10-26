import { Link, NavLink } from "react-router-dom";
import logo from "../assets/rlogo.png";
import { FaUser } from "react-icons/fa";

import { TiThMenu } from "react-icons/ti";
const Navbar = () => {
  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to="/contacct">Contact</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-200 w-full md:py-4">
      <div className="lg:navbar-start navbar-center w-1/2 lg:1/3">
        <div
          className="dropdown mr-2.5 bg-teal-600  hover:bg-teal-700 rounded-md
        "
        >
          <div
            tabIndex={0}
            role="button"
            className="px-3 py-2.5  lg:hidden text-white flex items-center justify-center font-bold"
          >
            <TiThMenu className="" />
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[10] mt-2 mr-2 p-2 shadow"
          >
            {navLinks}
          </ul>
        </div>
        <Link to="/" className=" text-xl flex items-center">
          <img className="w" src={logo} alt="" />
        </Link>
      </div>
      <div className="lg:navbar-center  hidden lg:flex lg-1/3">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end flex justify-end  lg:1/3">
        <div className="flex items-center gap-2">
          <Link to="/" className="p-4">
            <FaUser className="text-lg"></FaUser>
          </Link>
          <h1 className="btn bg-teal-600 text-white hover:text-black">
            Logout
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
