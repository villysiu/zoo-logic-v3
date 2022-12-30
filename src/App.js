import './App.css';
import {  useState } from 'react';
import { getLevel } from './components/functions'
import GameBoard from './components/GameBoard';
import Navheader from './components/Navheader'
import About from './components/About';
import Contact from './components/Contact';


function App() {
  const [level, setLevel] = useState(getLevel());  
  const [about, setAbout]=useState(true) 

  
  return (

    <div className="App">
      {about && <About show={about} setShow={setAbout} /> }
      {/* <header className="App-header"> */}
          <Navheader setAbout={setAbout} />
          <GameBoard level={level} setLevel={setLevel} />
          <Contact />
      {/* </header> */}
    </div>
    
  );
}

export default App;
