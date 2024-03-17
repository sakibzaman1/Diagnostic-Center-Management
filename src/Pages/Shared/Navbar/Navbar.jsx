import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProvider';

const Navbar = () => {

  const {user, logOut} = useContext(AuthContext);


    const navOptions = <>
    
    <li><Link to="/">Home</Link></li>
        <li>
         <Link to='/services'>Services</Link>
        </li>
        <li><Link to='/contact'>Contact</Link></li>
        <li><Link to='/aboutUs'>About Us</Link></li>

    </>

    return (
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
       {navOptions}
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">Diagnostic Center</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {navOptions}
    </ul>
  </div>
  <div className="navbar-end">

    {
      user? <Link onClick={logOut}><a className="btn">Log Out</a></Link> :     <Link to='/login'><a className="btn">Login</a></Link>
    }
    {
      user? <Link to='/register'><a className="btn">Add Account</a></Link> : <Link to='/register'><a className="btn">Register</a></Link>
    }
    {
      user? <Link to='/dashboard'><a className="btn">Dashboard</a></Link> : ''
    }
  </div>
</div>
    );
};

export default Navbar;