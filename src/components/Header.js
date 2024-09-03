import { QuestionCircle } from "react-bootstrap-icons"
const Header = ({setAbout}) => {
    return (
        <div className='logo-wrapper'>
            <div className="logo fredericka-the-great-regular" >
                Zoo Logic
            </div>
            <div>
                <QuestionCircle size={30} onClick={()=>setAbout(true)}/>
            </div>
        </div>
    )
}
export default Header