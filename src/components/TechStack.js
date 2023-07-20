import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
const TechStack = () => {
    return(
        
        <div className='techstack_wrapper'>
                    <Card className='techstack'>
                        <p>
                        <Link to="/">Back to Zoo Logic</Link></p>
                        <p>
                        <h3>About </h3>
                        Zoo Logic is a logic game in which players place the animal token on the board to satisfy the requirement.
                            
                        </p>

                        <h3>Tech Stack </h3>
                        <li>Designed front-end framework with <strong>React.js, HTML5 and CSS3</strong>. </li>
                        <li>Applied Object Oriented Programming to develop UI components that could be reused across Web application</li>
                        <li>Used <strong>JavaScript and ES6</strong> properties for the  algorithms.</li>
                        <li>Built Responsive user interface using <strong>React Bootstrap</strong> grid (Container, Row, Col), 
                            and <strong>CSS3</strong> media queries and flexbox to accomodate screen size of different devices.</li>
                        <li>Applied optimization to reduce load time and avoid re-rendering to enhance user experience.</li>
                        <li>Optimized with reusable functions to increase performance in rendering.</li>
                        
                        
                        <li>Used <strong>React Hooks</strong> (useState, useEffect) to use state and lifecycle methods inside functional components.</li>
                        {/* <li>Used React useReducer hook to render the updated state after user input and during calculation.</li> */}
                        {/* <li>Used setTimeout and useEffect hooks to imitate click on calculator pad when user pressed keys on keyboard.</li> */}
                        <li>Extensively used git for version controlling and regularly pushed the code to Github.</li>
                        <li>Deployed to GitHub Pages</li>
                        <li>Used <strong>Hash Router</strong>, which uses the hash portion of the URL to keep the UI in sync with the URL.</li>
                        
                    </Card>
                    </div>
    )
}
export default TechStack