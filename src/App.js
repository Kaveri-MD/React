import React, { useState } from 'react';
// import logo from './logo.svg';

import '../src/style/style.scss'
import Header from './MainWindow/Header'
import LeftNavigation from './MainWindow/LeftNavigation'
import RightNavigation from './MainWindow/RightNavigation'
function App() {
  const[display, setDisplay] = useState(false);
  
    return (
      <div>
        <Header setDisplay={setDisplay}/>
        <div className='features'>
          <LeftNavigation display={display}  />
          <RightNavigation setDisplay={setDisplay}/>
        </div>
      </div>
    );

}

export default App;

