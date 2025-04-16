import { Button } from '../../components/Button';

export const StartPage = () => {
  return (
    <div className='flex gap-4 lg:gap-10'>
      <Button className='rounded-lg lg:rounded-[14px] px-4 lg:px-13 lg:p-4 text-sm lg:text-[27px]'>
        PLAY
      </Button>

      <p className='text-lg lg:text-[37px] leading-none lg:leading-[122%] font-bold text-blue-800 dark:text-grey-500'>
        Rock Paper Scissors <br />
        The game
      </p>
    </div>
  );
};
