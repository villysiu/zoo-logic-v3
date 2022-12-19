import './App.css';
import {  useState } from 'react';

import { useWindowSize } from './components/functions'
import { getLevel } from './components/functions'
import GameBoard from './components/GameBoard';
import Header from './components/Header'
import background from "./images/forest_bg.png";
import About from "./components/About"
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
    <div className="App" style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover',}}>
      <header className="App-header">
          {/* {size.width}px / {size.height}px / level {level} */}
        
          <Header />
          <GameBoard width={size.width>700? 600 : 350} level={level} setLevel={setLevel} />
          
      </header>
    </div>
  );
}

export default App;
