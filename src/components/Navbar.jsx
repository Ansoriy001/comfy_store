import { useNavigate, NavLink } from "react-router-dom";
import { BsMoonFill, BsFillSunFill } from "react-icons/bs";

import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

function Navbar() {
  const savat = useSelector((state) => state.products.savat);

  const navigate = useNavigate();

  const [mode, setMode] = useState(JSON.parse(localStorage.getItem("mode")));

  if (mode) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }

  useEffect(() => {
    if (mode) {
      localStorage.setItem("mode", true);
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("mode", false);
    }
  }, [mode]);

  const [navLinks, setNavLinks] = useState(false);

  return (
    <div className="bg-[#F0F6FF] dark:bg-black">
      <nav className="bg-white dark:bg-gray-900 fixe w-full z-20 top- left-0 border-b border-gray-200 dark:border-gray-600">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between relative mx-auto p-4">
          <div className="flex md:order-0">
            <button className="bg-blue-600 hidden md:inline text-white text-2xl dark:bg-[#FF7AC6] font-bold rounded-lg py-2 px-4">
              C
            </button>
            <button
              onClick={() => setNavLinks(!navLinks)}
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 512 512"
                className="h-6 w-6"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM64 256c0-17.7 14.3-32 32-32H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H96c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"></path>
              </svg>
            </button>
          </div>
          <div
            className={`items-center justify-between ${
              !navLinks && "hidden"
            } w-full md:flex md:w-auto md:order-1" id="navbar-sticky`}
          >
            <div className="flex items-center flex-col dark:text-white font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-5 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "active dark:bg-[#414558]"
                    : ""
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "active dark:bg-[#414558]"
                    : ""
                }
              >
                About
              </NavLink>
              <NavLink
                to="/products"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "active dark:bg-[#414558]"
                    : ""
                }
              >
                Products
              </NavLink>
              <NavLink
                to="/cart"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "active dark:bg-[#414558]"
                    : ""
                }
              >
                Cart
              </NavLink>
            </div>
          </div>
          <div className="flex gap-3 order-2">
            <button onClick={() => setMode(!mode)} className="dark:text-white">
              {mode ? <BsFillSunFill /> : <BsMoonFill />}
            </button>
            <button
              className="relative dark:text-white"
              onClick={() => navigate("/cart")}
            >
              <span className="absolute   bg-blue-500 text-white px-2 text-xs rounded-lg">
                {savat.length}
              </span>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 16 16"
                className="h-6 w-6"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"></path>
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
