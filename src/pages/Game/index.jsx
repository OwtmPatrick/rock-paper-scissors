import { Image } from '../../components/Image';
import { Button } from '../../components/Button';
import { items as itemsConst } from '../../constants';

const items = [itemsConst.rock, itemsConst.paper, itemsConst.scissors];

export const GamePage = () => {
  const onItemClick = (item) => {
    console.log(item);
  };

  return (
    <div className='flex flex-col items-center gap-6 lg:gap-8'>
      <h1 className='text-blue-800 dark:text-grey-500 text-xl lg:text-3xl'>
        Rock Paper Scissors
      </h1>

      <div className='flex flex-col items-center gap-2 lg:gap-4 text-black dark:text-white'>
        <button className='cursor-pointer max-w-[184px] text-md lg:text-xl'>
          RESET THE SCORE
        </button>

        <div className='flex flex-col md:flex-row gap-1 md:gap-3 justify-between lg:w-[600px] lg:max-w-[420px]'>
          <span className='font-semibold text-sm'>PLAYER SCORE: 0</span>
          <span className='font-semibold text-sm'>COMPUTER SCORE: 0</span>
        </div>
      </div>

      <p className='font-semibold text-xl lg:text-[40px] text-red-800 dark:text-blue-300'>
        YOU WON ! 🎉
      </p>

      <div className='flex flex-col gap-2 md:flex-row items-center justify-between w-[100%] max-w-[345px] text-black dark:text-white'>
        <Image item='paper' />
        <span className='text-xl'>VS</span>
        <Image item='rock' />
      </div>

      <div className='flex flex-col gap-4 md:gap-6'>
        <p className='text-sm font-medium text-grey-800 dark:text-grey-300 text-center'>
          Choose your move, rock paper or scissors?
        </p>

        <div className='flex flex-col md:flex-row justify-between gap-3 md:gap-[45px]'>
          {items.map((item) => (
            <Button
              key={item}
              onClick={() => onItemClick(item)}
              className='rounded-[14px] p-3 md:p-[17px] min-w-[160px] text-md md:text-[25px] uppercase'
            >
              {item}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};
