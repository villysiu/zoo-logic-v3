import './App.css';
import {  useState } from 'react';

import { useWindowSize } from './components/functions'
import { getLevel } from './components/functions'
import GameBoard from './components/GameBoard';


function App() {
  console.log("in app")
  const size = useWindowSize();

  const [level, setLevel] = useState(getLevel());  
    
    
  if(size.width>size.height && size.height<450){
    return(
      <div>ohhhhnnnooooo</div>
    )
  }
// console.log(game)
  return (
    <div className="App">
      <header className="App-header">
          {size.width}px / {size.height}px / level {level}
          <GameBoard width={size.width>700? 600 : 350} level={level} setLevel={setLevel} />
          
      </header>
    </div>
  );
}

export default App;
