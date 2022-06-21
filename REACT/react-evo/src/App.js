import React, { Fragment }  from 'react';
import Planets from './components/planets';
import Planet from './components/planets/planet';


function App() {
  return (
    <div className="App">
      <Planets/>
      <Planet/>
    </div>
  );
}

export default App;
