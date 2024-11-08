import { NavLink ,Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { GiSelfLove } from "react-icons/gi";
const Navbar = () => {
    return (
        <div className="w-11/12 mx-auto">
       <div class="navbar bg-white">
          <div class="navbar-start">
            <div class="dropdown">
              <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabindex="0"
                class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                <NavLink
                  className={({ isActive }) =>
                    ` font-bold ${
                      isActive ? "text-warning" : "hover:text-warning"
                    }`
                  }
                  to="/"
                >
                  Home
                </NavLink>
  
                <NavLink
                  className={({ isActive }) =>
                    ` font-bold ${
                      isActive ? "text-warning" : "hover:text-warning"
                    }`
                  }
                  to="/statistic"
                >
                  
                  Statistics
                </NavLink>
                <NavLink
                  className={({ isActive }) =>
                    ` font-bold ${
                      isActive ? "text-warning" : "hover:text-warning"
                    }`
                  }
                  to="/dashboard"
                >
                  
                  Dashboard
                </NavLink>
              </ul>
            </div>
            <Link to="/" class=" text-xl">
              Gadget Heaven
            </Link>
          </div>
          <div class="navbar-center hidden lg:flex">
            <ul class="menu menu-horizontal px-1 gap-10">
            <NavLink
                  className={({ isActive }) =>
                    ` font-bold ${
                      isActive ? "text-warning" : "hover:text-warning"
                    }`
                  }
                  to="/"
                >
                  Home
                </NavLink>
              <NavLink
                  className={({ isActive }) =>
                    ` font-bold ${
                      isActive ? "text-warning" : "hover:text-warning"
                    }`
                  }
                  to="/statistic"
                >
                  
                  Statistics
                </NavLink>
              <NavLink
                  className={({ isActive }) =>
                    ` font-bold ${
                      isActive ? "text-warning" : "hover:text-warning"
                    }`
                  }
                  to="/dashboard"
                >
                  
                  Dashboard
                </NavLink>
            </ul>
          </div>
          <div className="navbar-end flex gap-3" >
        <FaShoppingCart style={{ color: 'black', fontSize: '24px' }} />
        <GiSelfLove />

        </div>      
        </div>
       
        </div>
       )
   
};

export default Navbar;