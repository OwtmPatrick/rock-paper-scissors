import { useEffect } from 'react';
import moonIcon from '../../assets/moon.svg';
import sunIcon from '../../assets/sun.svg';
import { useSelector, useDispatch } from 'react-redux';
import { themeSelector } from '../../store/selectors';
import { toggleTheme } from '../../store/actions/theme';
import { theme as themeConst } from '../../constants';

export const ThemeSwitcher = () => {
  const theme = useSelector(themeSelector);
  const dispatch = useDispatch();

  const onThemeSwitch = () => {
    dispatch(toggleTheme);
    document.body.classList.toggle(themeConst.dark);
  };

  useEffect(() => {
    if (theme === themeConst.dark) document.body.classList.add(themeConst.dark);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className='flex justify-end'>
      <button type='button' className='cursor-pointer' onClick={onThemeSwitch}>
        <img src={theme === themeConst.light ? moonIcon : sunIcon} />
      </button>
    </div>
  );
};
