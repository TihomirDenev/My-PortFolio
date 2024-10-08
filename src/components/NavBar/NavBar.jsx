import ThemeChangeIcons from "../ThemeChangeIcons/ThemeChangeIcons";
import { DARK_THEME, LIGHT_THEME } from "../../common/constants";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import {
  AiOutlineContacts,
  AiOutlineFundProjectionScreen,
  AiOutlineHome,
  AiOutlineTool,
  AiOutlineUser,
} from "react-icons/ai";

export default function NavBar() {
  const [theme, setTheme] = useState(
    !localStorage.getItem("theme") ? LIGHT_THEME : localStorage.getItem("theme")
  );

  const handleToggle = (e) => {
    setTheme(e.target.checked ? DARK_THEME : LIGHT_THEME);
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.querySelector("html").setAttribute("data-theme", theme);
  }, [theme]);

  const closeDrawer = () => {
    const drawerToggle = document.getElementById("nav-drawer");
    if (drawerToggle) {
      drawerToggle.checked = false;
    }
  };

  return (
    <div className="drawer drawer-end bg-gray-800 text-gray-300">
      <input id="nav-drawer" type="checkbox" className="drawer-toggle" />
      <div className="flex justify-between items-center px-3">
        <ThemeChangeIcons toggleTheme={handleToggle} currentTheme={theme} />
        <div className="block md:hidden">
          <label htmlFor="nav-drawer" className="drawer-button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </label>
        </div>
        <div className="hidden md:block">
          <ul className="menu menu-horizontal items-center text-lg">
            <li>
              <NavLink to="/" onClick={closeDrawer}>
                <AiOutlineHome />
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" onClick={closeDrawer}>
                <AiOutlineUser />
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/skills" onClick={closeDrawer}>
                <AiOutlineTool />
                Skills
              </NavLink>
            </li>
            <li>
              <NavLink to="/projects" onClick={closeDrawer}>
                <AiOutlineFundProjectionScreen />
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" onClick={closeDrawer}>
                <AiOutlineContacts />
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className="drawer-side z-50">
        <label htmlFor="nav-drawer" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-52 rounded-2xl bg-base-100 text-lg text-gray-600">
          <li>
            <NavLink to="/" onClick={closeDrawer}>
              <AiOutlineHome />
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" onClick={closeDrawer}>
              <AiOutlineUser />
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/skills" onClick={closeDrawer}>
              <AiOutlineTool />
              Skills
            </NavLink>
          </li>
          <li>
            <NavLink to="/projects" onClick={closeDrawer}>
              <AiOutlineFundProjectionScreen />
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" onClick={closeDrawer}>
              <AiOutlineContacts />
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}
