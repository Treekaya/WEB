import {
    FaRegBell,
    FaUserCircle,
    FaMoon,
    FaSun,
  } from 'react-icons/fa';

import useDarkMode from '../hooks/useDarkMode';



function TopNavigation(props) {
    return(

        <div className='top-navigation bg-slate-600'>
        <h5 class="title-text">Nachji</h5>
        <ThemeIcon />
        <FaRegBell size='24' className='top-navigation-icon' />;
        <FaUserCircle size='24' className='top-navigation-icon' />;
        </div>

    );
}

const ThemeIcon = () => {
    const [darkTheme, setDarkTheme] = useDarkMode();
    const handleMode = () => setDarkTheme(!darkTheme);
    return (
      <span onClick={handleMode}>
        {darkTheme ? (
          <FaSun size='24' className='top-navigation-icon' />
        ) : (
          <FaMoon size='24' className='top-navigation-icon' />
        )}
      </span>
    );
};

export default TopNavigation;