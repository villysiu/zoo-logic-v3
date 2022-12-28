import './App.css';
import {  useState } from 'react';

import { useWindowSize } from './components/functions'
import { getLevel } from './components/functions'
import GameBoard from './components/GameBoard';
import Header from './components/Header'
import About from './components/About';
import background from "./images/forest_bg.png";
import rotate from "./images/rotate.png"
function App() {
  console.log("in app")
  const size = useWindowSize();
  
  const [level, setLevel] = useState(getLevel());  
  const [about, setAbout]=useState(true) 
  
    
  if(size.width>size.height && size.height<450){
    return(
      <div className="App" >
        <img src={rotate} width="300" alt="rotate" ></img>
        <p>Oh no! We cant fit everything on your screen. Please rotate your device.</p>
      </div>
    )
  }

  return (
    <div className="App" style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover',}}>
      {about && <About show={about} setShow={setAbout} diaglog={ size.width>900 ? "modal-50w" : "modal-90w" } />}
      <header className="App-header">
         
      <Header setAbout={setAbout} />
          <GameBoard width={(size.width>700 && size.height>800)? 600 : 350} level={level} setLevel={setLevel} />
          
      </header>
    </div>
  );
}

export default App;
