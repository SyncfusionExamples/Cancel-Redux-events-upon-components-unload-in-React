import React from 'react';
import logo from './logo.svg';
import { ExampleComponent } from './exampleComponent/ExampleComponent';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ExampleComponent />
      </header>
    </div>
  );
}

export default App;
