import { items } from './constants';

const getRandomIndex = () => {
  const random = Math.random();
  if (random <= 0.33) {
    return 0;
  }

  if (random <= 0.66) {
    return 1;
  }

  return 2;
};

export const getRandomItem = () => {
  const randomIndex = getRandomIndex();

  return Object.keys(items)[randomIndex];
};

export const getWinner = (item1, item2) => {
  if (item1 === item2) return 'draw';

  if (item1 === items.rock) {
    return item2 === items.scissors ? 'player1' : 'player2';
  }

  if (item1 === items.paper) {
    return item2 === items.rock ? 'player1' : 'player2';
  }

  if (item1 === items.scissors) {
    return item2 === items.paper ? 'player1' : 'player2';
  }
};
