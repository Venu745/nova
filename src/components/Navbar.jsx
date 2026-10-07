import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.jpeg";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "About", path: "/about" },
    { name: "Features", path: "/features" },
    { name: "Connections", path: "/connections" },
    { name: "How it Work", path: "/how-it-works" },
    { name: "FAQ", path: "/faq" },
    { name: "Pricing", path: "/pricing" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-white/90 backdrop-blur-xl">
      <nav className="mx-auto flex h-[72px] w-full max-w-[1400px] items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* LOGO */}
        <NavLink to="/" className="group flex shrink-0 items-center gap-3">
          <div className="relative">
            <div className="absolute -inset-1 rounded-xl bg-slate-300/40 blur-md transition duration-300 group-hover:bg-slate-400/60" />

            <img
              src={logo}
              alt="Logo"
              className="relative h-10 w-10 rounded-xl object-cover ring-1 ring-slate-200 transition duration-300 group-hover:scale-105"
            />
          </div>

          <span className="hidden text-lg font-bold tracking-tight text-slate-900 sm:block">
            NOVA
          </span>
        </NavLink>

        {/* DESKTOP NAV  */}
        <div className="absolute left-1/2 hidden -translate-x-1/2 items-center md:flex">
          <div className="flex items-center gap-1 rounded-full border border-slate-200 bg-slate-50/80 p-1 shadow-sm">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? "bg-white text-slate-950 shadow-sm ring-1 ring-slate-200"
                      : "text-slate-500 hover:bg-white hover:text-slate-900"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>
        </div>

        {/*---- RIGHT SIDE-----*/}
        <div className="flex items-center gap-2">
          {/* Login Button */}
          <NavLink
            to="/login"
            className="hidden rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-slate-900/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-800 hover:shadow-xl sm:inline-flex"
          >
            Login
          </NavLink>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 transition hover:bg-slate-50 md:hidden"
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/*  MOBILE MENU  */}
      <div
        className={`overflow-hidden border-t border-slate-100 bg-white transition-all duration-300 md:hidden ${
          menuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="mx-auto max-w-[1400px] space-y-2 px-4 py-4 sm:px-6">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `block rounded-xl px-4 py-3 text-sm font-medium transition ${
                  isActive
                    ? "bg-slate-100 text-slate-950"
                    : "text-slate-600 hover:bg-slate-50 hover:text-slate-950"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}

          {/* Mobile Login */}
          <NavLink
            to="/login"
            onClick={() => setMenuOpen(false)}
            className="block rounded-xl bg-slate-900 px-4 py-3 text-center text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            Login
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
