import './App.css';
import {  useState } from 'react';

import { useWindowSize } from './components/functions'
import { getLevel } from './components/functions'
import GameBoard from './components/GameBoard';
import Header from './components/Header'
import About from './components/About';
import Contact from './components/Contact';

function App() {
  // console.log("in app")
  const size = useWindowSize();
  
  const [level, setLevel] = useState(getLevel());  
  const [about, setAbout]=useState(true) 

  
  return (

    <div className="App">

      {about && <About show={about} setShow={setAbout} diaglog={ size.width>900 ? "modal-50w" : "modal-90w" } />}
      
      {/* <header className="App-header"> */}
         
         <Header setAbout={setAbout} />
          <br/><br/>
          <GameBoard level={level} setLevel={setLevel} />
          <Contact />
      {/* </header> */}
    </div>
    
  );
}

export default App;
