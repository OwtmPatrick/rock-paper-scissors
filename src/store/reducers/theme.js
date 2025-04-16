import { localStorageKeys, theme as themeConst } from '../../constants';
import { TOGGLE } from '../actions/theme';

const initialState = localStorage.getItem(localStorageKeys.theme) ?? 'light';

export const theme = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE: {
      const theme =
        state === themeConst.light ? themeConst.dark : themeConst.light;
      localStorage.setItem(localStorageKeys.theme, theme);

      return theme;
    }

    default:
      return state;
  }
};
