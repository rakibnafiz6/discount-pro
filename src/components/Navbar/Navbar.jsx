import { FaHouseChimneyMedical } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div>

            <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <NavLink to='/'><li>Home</li></NavLink>
        <NavLink to='/brands'><li>Brands</li></NavLink>
        <NavLink to='/my-profile'><li>My-profile</li></NavLink>
        {/* <NavLink><li>About Dev</li></NavLink> */}
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">Coupon</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 flex items-center">
        <FaHouseChimneyMedical /><li><NavLink to='/'>Home</NavLink></li>
        <FaHouseChimneyMedical /><li><NavLink to='/brands'>Brands</NavLink></li>
        <FaHouseChimneyMedical /><li><NavLink to='/my-profile'>My-profile</NavLink></li>
        {/* <FaHouseChimneyMedical /> <li><NavLink>About Dev</NavLink></li> */}
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn mr-2">Login</a>
    <a className="btn">Registration</a>
  </div>
</div>
        </div>
    );
};

export default Navbar;