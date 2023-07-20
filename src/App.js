import './App.css';
import { useState } from 'react';
import { getLevel } from './components/functions'
import GameBoard from './components/GameBoard';
import Header from './components/Header'
import About from './components/About';
import Footer from './components/Footer';


function App() {
  const [level, setLevel] = useState(getLevel());  
  const [about, setAbout]=useState(true) 

  
  return (

    <div className="App">
      {about && <About show={about} setShow={setAbout} /> }
      
          {/* <Navheader setAbout={setAbout} /> */}
          <Header setAbout={setAbout} />
          <GameBoard level={level} setLevel={setLevel} />
          <Footer />

    </div>
    
  );
}

export default App;
