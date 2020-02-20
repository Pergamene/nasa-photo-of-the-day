import React from 'react';
import Header from './components/Header/Header.jsx';
import ApodCard from './components/apodContainer/ApodCard.jsx';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Header />
      <ApodCard />
    </div>
  );
}

export default App;
