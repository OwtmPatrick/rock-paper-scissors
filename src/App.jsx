// import { useState } from 'react';
import './App.css';
import { Provider } from 'react-redux';
// import { store } from './store';
import { store } from './store';

import { ThemeSwitcher } from './components/ThemeSwitcher';

function App() {
  return (
    <Provider store={store}>
      <main className='bg-grey-300 dark:bg-gray-800'>
        <ThemeSwitcher />
      </main>
    </Provider>
  );
}

export default App;
