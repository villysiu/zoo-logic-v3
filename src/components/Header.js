import { QuestionCircle } from "react-bootstrap-icons"
import About from "./About"
const Header = ({setAbout}) => {
    return (
        <div className='logo-wrapper'>
        <div className="logo" >
            Zoo Logic
            </div>
            <div><QuestionCircle size={30} onClick={()=>setAbout(true)}/></div>
        </div>
    )
}
export default Header