import { Link, NavLink } from "react-router-dom";
import logo from "../assets/rlogo.png";
import { FaUser } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
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
    <div className="navbar bg-base-200 px-3.5 py-5">
      <div className="navbar-start">
        <Link to="/" className=" text-xl flex items-center">
          <img className="w" src={logo} alt="" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        <div
          className="dropdown bg-teal-600  rounded-md
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
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-28 p-2 shadow"
          >
            {navLinks}
          </ul>
        </div>
        <Link to="/" className="p-4">
          <FaUser className="text-lg"></FaUser>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
