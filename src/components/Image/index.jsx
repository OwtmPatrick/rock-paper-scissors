import { Paper } from './icons/Paper';
import { Rock } from './icons/Rock';
import { Scissors } from './icons/Scissors';

const iconMapper = {
  paper: Paper,
  rock: Rock,
  scissors: Scissors
};

export const Image = ({ item }) => {
  const Component = iconMapper[item];

  if (!Component) {
    return null;
  }

  return (
    <div className='w-[100px]'>
      <Component classname='test' />
    </div>
  );
};
