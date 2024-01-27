import React from 'react';
import JSON_DATA from './JSON_DATA.json';

function App() {
  return (
    <>
      <div className=''>
        <input type='text' placeholder='Search...' />
        {JSON_DATA.map((val, key) => {
          return <div>{val.first_name}</div>
        })}
      </div>
    </>
  );
}

export default App;
