import { pages as pagesConst } from '../../constants';
import { GO_GAME } from '../actions/pages';

const initialState = { current: pagesConst.start };

export const pages = (state = initialState, action) => {
  switch (action.type) {
    case GO_GAME:
      return {
        ...state,
        current: pagesConst.game
      };

    default:
      return state;
  }
};
