import React from 'react'
import { GlobalSpinner } from './components/GlobalSpinner/GlobalSpinner'
import { RandomComments } from './components/RandomComments'
import { GlobalSpinnerContextProvider } from './context/GlobalSpinnerContext'
import './App.css';

function App() {
  return (
    <GlobalSpinnerContextProvider>
      <div className="App">
        <GlobalSpinner />
        <RandomComments />
      </div>
    </GlobalSpinnerContextProvider>
  );
}

export default App;
