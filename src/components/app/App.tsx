import './App.scss';
import React from 'react';

function App() {
  return (
    <div className="App">
      <div className='calc-box'>
        <div className='calc-box-buttons'>
          <button className='switch runtime'>
            <image className='switch-img eye'></image>
            <p>Runtime</p>
          </button>
          <button className='switch constructor active'>
          <image className='switch-img selector'></image>
            <p>Constructor</p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
