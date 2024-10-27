import { Link, NavLink } from "react-router-dom";
import logo from "../assets/rlogo.png";
import { FaUser } from "react-icons/fa";

import { TiThMenu } from "react-icons/ti";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvier/AuthProvider";
const Navbar = () => {
  const { user, logOutUser } = useContext(AuthContext);
  // console.log(user);
  const handleLogout = () => {
    logOutUser()
    .then(()=> console.log('Sign Out Successful'))
    .catch(error => console.log(error.message))
  }
  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact</NavLink>
      </li>
      <li>
        <NavLink to="/favorite">Favorite</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-200 bg-opacity-30 w-full md:py-4 sticky top-0 z-20 backdrop-blur-md">
      {/* first */}
      <div className="lg:navbar-start navbar-center w-1/2 md:w-1/3 ">
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
      {/* second */}
      <div className="lg:navbar-center  hidden lg:flex lg:1/3 lg:ml-20 ">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      {/* third */}
      <div className="navbar-end flex justify-end  lg:1/3">
        {/* if user exits */}

        {user ? (
          <div className="flex items-center gap-2">
            <Link to="/" className="p-4 border rounded-full bg-teal-400">
              <FaUser className="text-lg"></FaUser>
            </Link>
            <button onClick={handleLogout} className="btn bg-teal-600 text-white hover:text-black">
              Logout
            </button>
          </div>
        ) : (
          <div className="flex items-center gap-2">
            <Link
              to={"/login"}
              className="btn bg-teal-600 border-none text-white hover:text-black border "
            >
              Login
            </Link>
            <Link
              to={"/register"}
              className="btn bg-teal-600 border-none text-white hover:text-black"
            >
              Register
            </Link>
          </div>
        )}

        {
          // if user not exist
        }
      </div>
    </div>
  );
};

export default Navbar;
