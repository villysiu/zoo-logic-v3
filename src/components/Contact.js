import { Button } from "react-bootstrap"
const Contact =() => {
    const email="villysiu@gmail.com"
        return(
          <div className="contact"><p  >
            2022 Zoo Logic created by Villy Siu<br/> Have feedback, email me at 
                <Button variant="link" onClick={()=>window.open(`mailto:${email}`)}>{email}</Button>
            <br/>
            <a href='https://github.com/villysiu/zoo-logic-v3'>GitHub</a>
            {"   "}
            <a href='https://www.linkedin.com/in/villy-siu-384b81132/'>LinkedIn</a>
          </p>
          </div>
        )
      }
export default Contact