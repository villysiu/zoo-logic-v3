import './App.css';
import { useState } from 'react';

import Main from './components/Main';
import Header from './components/Header'
import About from './components/About';
import Footer from './components/Footer';


function App() {
  
  const [about, setAbout]=useState(true) 

  
  return (

    <div className="App">
      {about && <About show={about} setShow={setAbout} /> }
      
          {/* <Navheader setAbout={setAbout} /> */}
          <Header setAbout={setAbout} />
          <Main />
          <Footer />

    </div>
    
  );
}

export default App;
