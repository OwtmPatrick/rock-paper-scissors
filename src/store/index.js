import { createStore, combineReducers } from 'redux';
import { theme } from './reducers/theme';
import { pages } from './reducers/pages';
import { game } from './reducers/game';

const rootReducer = combineReducers({
  theme,
  pages,
  game
});

export const store = createStore(rootReducer);
