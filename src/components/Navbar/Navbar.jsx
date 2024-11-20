import { useContext } from "react";
import { FaHouseChimneyMedical } from "react-icons/fa6";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import 'animate.css';
const Navbar = () => {
  const {user,signOutUser} = useContext(AuthContext);
  const navigate = useNavigate();

    const handleSignOut = ()=>{
      signOutUser()
      .then(()=>{
        console.log('signOut Successfully');
        navigate('/');
      })
      .catch(error=>console.log(error.message))
    }

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
        <NavLink to='/profile'><li>MyProfile</li></NavLink>
      </ul>
    </div>
    <a className="animate__animated animate__bounce btn btn-neutral text-white text-xl">Coupon</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 flex items-center">
        <FaHouseChimneyMedical /><li><NavLink to='/'>Home</NavLink></li>
        <FaHouseChimneyMedical /><li><NavLink to='/brands'>Brands</NavLink></li>
        <FaHouseChimneyMedical /><li><NavLink to='/profile'>MyProfile</NavLink></li>
        {/* <FaHouseChimneyMedical /> <li><NavLink>About Dev</NavLink></li> */}
    </ul>
  </div>
  <div className="navbar-end">
    {
      user ? <Link to='/login' onClick={handleSignOut} className="btn bg-neutral text-white">Log-out</Link> :
     <div> <Link to='/login' className="btn mr-2 bg-neutral text-white">Login</Link>
    <Link to='/register' className="btn mr-2 bg-neutral text-white">Registration</Link></div>
    }
    
    
    
  </div>
</div>
        </div>
    );
};

export default Navbar;