import cn from 'classnames';

export const Button = ({ children, className, ...props }) => {
  return (
    <button
      type='button'
      className={cn(
        'text-white bg-red-500 dark:bg-blue-500 font-bold cursor-pointer',
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
