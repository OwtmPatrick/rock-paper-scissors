import { createStore, combineReducers } from 'redux';
import { theme } from './reducers/theme';

const rootReducer = combineReducers({
  theme
});

export const store = createStore(rootReducer);
