import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './MainWindow/Header'
import LeftFeatures from './MainWindow/LeftFeatures'
import RightFeatures from './MainWindow/RightFeatures'
function App() {
    return (
      <div>
        <Header />
        <div className='features'>
          <LeftFeatures />
          <RightFeatures />
        </div>
      </div>
    );

}

export default App;

