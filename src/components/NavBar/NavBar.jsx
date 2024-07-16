import ThemeChangeIcons from '../ThemeChangeIcons/ThemeChangeIcons';
import { DARK_THEME, LIGHT_THEME } from '../../common/constants';
import { useEffect } from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  AiOutlineContacts,
  AiOutlineFundProjectionScreen,
  AiOutlineHome,
  AiOutlineTool,
  AiOutlineUser,
} from 'react-icons/ai';

export default function NavBar() {
  const [theme, setTheme] = useState(
    !localStorage.getItem('theme') ? LIGHT_THEME : localStorage.getItem('theme')
  );

  const handleToggle = (e) => {
    setTheme(e.target.checked ? DARK_THEME : LIGHT_THEME);
  };

  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.querySelector('html').setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <div className='drawer bg-base-300 flex justify-between px-3 items-center'>
      <div>
        <ThemeChangeIcons
          toggleTheme={handleToggle}
          currentTheme={theme}
        />
      </div>
      <div>
        <ul className='menu menu-horizontal items-center text-lg'>
          <li>
            <NavLink to='/'>
              <AiOutlineHome />
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to='/about'>
              <AiOutlineUser />
              About
            </NavLink>
          </li>
          <li>
            <NavLink to='/skills'>
              <AiOutlineTool />
              Skills
            </NavLink>
          </li>
          <li>
            <NavLink to='/projects'>
              <AiOutlineFundProjectionScreen />
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink to='/contact'>
              <AiOutlineContacts />
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}
