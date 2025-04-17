import cn from 'classnames';
import { Paper } from './icons/Paper';
import { Rock } from './icons/Rock';
import { Scissors } from './icons/Scissors';

const iconMapper = {
  paper: Paper,
  rock: Rock,
  scissors: Scissors
};

export const Image = ({ item, flipped }) => {
  const Component = iconMapper[item];

  if (!Component) {
    return <div className='w-[100px] h-[100px]' />;
  }

  return (
    <div
      className={cn('w-[100px]', {
        'scale-x-[-1]': flipped,
        'scale-y-[1]': flipped
      })}
    >
      <Component classname='test' />
    </div>
  );
};
