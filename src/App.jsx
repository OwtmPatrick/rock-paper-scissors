import './App.css';
import { useSelector } from 'react-redux';
import { currentPageSelector } from './store/selectors';
import { StartPage } from './pages/Start';
import { GamePage } from './pages/Game';
import { pages } from './constants';
import { ThemeSwitcher } from './components/ThemeSwitcher';

function App() {
  const currentPage = useSelector(currentPageSelector);

  return (
    <main className='relative flex items-center justify-center bg-grey-300 dark:bg-gray-800'>
      <ThemeSwitcher />

      {currentPage === pages.start ? <StartPage /> : <GamePage />}
    </main>
  );
}

export default App;
