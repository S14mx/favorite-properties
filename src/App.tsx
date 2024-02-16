import React, { FC } from 'react';
import Header from './Header.tsx';
import './App.css';

const App: FC = () => {
  return (
    <div className="App">
      <Header title='Favorite Properties'/>
        <p>
          Hello
        </p>
    </div>
  );
}

export default App;