import './App.css';
import { useState, useEffect } from 'react';
import Game from './components/Game';

function App() {
  const size = useWindowSize();
    
    function useWindowSize() {
        
        const [windowSize, setWindowSize] = useState({
          width: undefined,
          height: undefined,
        });

        useEffect(() => {
          function handleResize() {
            
            setWindowSize({
              width: window.innerWidth,
              height: window.innerHeight,
            });
          }
          
          window.addEventListener("resize", handleResize);
          
          handleResize();
          
          return () => window.removeEventListener("resize", handleResize);
        }, []); 

        return windowSize;
      }
  if(size.width>size.height && size.height<450){
    return(
      <div>ohhhhnnnooooo</div>
    )
  }

  return (
    <div className="App">
      <header className="App-header">
          {size.width}px / {size.height}px
        
          <Game width={size.width>700? 600 : 350} />
          
         
      </header>
    </div>
  );
}

export default App;
