import cn from 'classnames';

export const Button = ({ children, className }) => {
  return (
    <button
      type='button'
      className={cn(
        'text-white bg-red-500 dark:bg-blue-500 font-bold',
        className
      )}
    >
      {children}
    </button>
  );
};
