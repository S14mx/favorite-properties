import React, { FC } from 'react';
import Header from './Header.tsx';
import Footer from './Footer.tsx';
import InputField from './InputField.tsx';
import './App.css';

const App: FC = () => {
  return (
    <div className="App">
      <Header title='Favorite Properties'/>
      <InputField/>
        <p>
          Hello
        </p>
      <Footer title='Author: Sergii Otryshko'/>
    </div>
  );
}

export default App;