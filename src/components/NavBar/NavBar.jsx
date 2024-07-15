import ThemeChangeIcons from '../ThemeChangeIcons/ThemeChangeIcons';
import { DARK_THEME, LIGHT_THEME } from '../../common/constants';
import { useEffect } from 'react';
import { useState } from 'react';

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
    <div>
      <ThemeChangeIcons
        toggleTheme={handleToggle}
        currentTheme={theme}
      />
    </div>
  );
}
