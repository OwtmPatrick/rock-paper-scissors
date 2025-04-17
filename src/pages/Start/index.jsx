import { useDispatch } from 'react-redux';
import { goToGamePage } from '../../store/actions/pages';
import { Button } from '../../components/Button';

export const StartPage = () => {
  const dispatch = useDispatch();
  const goDraka = () => dispatch(goToGamePage);

  return (
    <div className='flex gap-4 lg:gap-10'>
      <Button
        className='rounded-lg lg:rounded-[14px] px-4 lg:px-13 lg:p-4 text-sm lg:text-[27px]'
        onClick={goDraka}
      >
        PLAY
      </Button>

      <p className='text-lg lg:text-[37px] font-bold lg:leading-[122%] text-blue-800 dark:text-grey-500'>
        Rock Paper Scissors <br />
        The game
      </p>
    </div>
  );
};
