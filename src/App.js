import React from 'react';
import './App.css';
import JSON_DATA from './JSON_DATA.json';

function App() {
  return (
    <>
      <div className='App'>
        <input type='text' placeholder='Search...' />
        {JSON_DATA.map((val, key) => {
          return (
          <div className='data' key={key}>
            <p> {val.first_name}</p>
          </div>
          )
        })}
      </div>
    </>
  );
}

export default App;
