import { createStore, combineReducers } from 'redux';
import { theme } from './reducers/theme';
import { pages } from './reducers/pages';

const rootReducer = combineReducers({
  theme,
  pages
});

export const store = createStore(rootReducer);
