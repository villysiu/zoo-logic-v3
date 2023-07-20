import { Button } from "react-bootstrap"
import { Link } from "react-router-dom"
const Footer =() => {
    const email="villysiu@gmail.com"
        return(
          <div className="contact"><p  >
            2022 Zoo Logic created by Villy Siu<br/> Have feedback, email me at 
                <Button variant="link" onClick={()=>window.open(`mailto:${email}`)}>{email}</Button>
            <br/>
            <Link to='/tech-stack'>Tech Stack</Link>
            {"   "}
            <a href='https://github.com/villysiu/zoo-logic-v3'>GitHub</a>
            {"   "}
            <a href='https://www.linkedin.com/in/villy-siu-384b81132/'>LinkedIn</a>
          </p>
          </div>
        )
      }
export default Footer