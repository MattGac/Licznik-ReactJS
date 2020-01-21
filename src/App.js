import React from 'react';
import './App.css';
import Header from './Heading';
import Counter from './Counter';

function App() {
  return (
    <div className="App container">
      <Header title="Aplikacja licznika w ReactJS" />
      <Counter initValue="100"/>
    </div>
  );
}

export default App;