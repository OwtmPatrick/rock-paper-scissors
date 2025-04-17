import { getRandomItem, getWinner } from '../../game';

import { PLAY, RESET } from '../actions/game';

const initialState = {
  score: {
    player: 0,
    computer: 0
  },
  items: {
    player: null,
    computer: null
  },
  winner: null
};

export const game = (state = initialState, action) => {
  switch (action.type) {
    case PLAY: {
      const itemPlayer = action.payload;
      const itemComputer = getRandomItem();

      const winner = getWinner(itemPlayer, itemComputer);
      const isWinnerPlayer = winner === 'player1';
      const isWinnerComputer = winner === 'player2';

      const newState = {
        score: {
          player: state.score.player + (isWinnerPlayer ? 1 : 0),
          computer: state.score.computer + (isWinnerComputer ? 1 : 0)
        },
        items: {
          player: itemPlayer,
          computer: itemComputer
        },
        winner: isWinnerPlayer ? 'you' : winner === 'draw' ? 'draw' : 'computer'
      };

      return newState;
    }

    case RESET:
      return initialState;

    default:
      return state;
  }
};
