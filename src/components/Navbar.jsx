import { useState } from "react";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import logo from "../assets/profit.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">

          <div className="flex items-center gap-3">
            <img
              src={logo}
              alt="Logo"
              className="h-11 w-11 object-contain"
            />

            <h1 className="text-xl font-semibold text-gray-800">
              Income & Expense Tracker
            </h1>
          </div>

          <div className="hidden lg:flex items-center gap-4">

            <Link to="/" className="rounded-lg px-5 py-2.5 text-gray-700 font-medium transition duration-300 hover:text-black cursor-pointer">
              Sign In
            </Link>

            <Link to="/signup" className="rounded-lg border-2 border-gray-900 px-5 py-2.5 font-medium text-gray-900 transition duration-300 hover:bg-gray-900 hover:text-white cursor-pointer" >
              Sign Up
            </Link>

          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden rounded-lg p-2 hover:bg-gray-100 transition"
          >
            {menuOpen ? (
              <HiX className="text-3xl" />
            ) : (
              <HiOutlineMenuAlt3 className="text-3xl" />
            )}
          </button>

        </div>
      </div>

      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-60" : "max-h-0"
        }`}
      >
        <div className="border-t bg-white px-6 py-5 shadow-sm">

          <button className="mb-3 w-full rounded-lg py-3 text-gray-700 font-medium hover:bg-gray-100 transition">
            Sign In
          </button>

          <button className="w-full rounded-lg border-2 border-gray-900 py-3 font-medium text-gray-900 transition hover:bg-gray-900 hover:text-white">
            Sign Up
          </button>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;