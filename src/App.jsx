import './App.css';
import { Provider } from 'react-redux';
import { store } from './store';
import { StartPage } from './pages/Start';
import { ThemeSwitcher } from './components/ThemeSwitcher';

function App() {
  return (
    <Provider store={store}>
      <main className='relative flex items-center justify-center bg-grey-300 dark:bg-gray-800'>
        <ThemeSwitcher />

        <StartPage />
      </main>
    </Provider>
  );
}

export default App;
