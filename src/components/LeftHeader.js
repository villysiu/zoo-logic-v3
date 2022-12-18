import Animal from "./Animal";
const LeftHeader = ({arr}) => {

    return (
        <table height="100%" width="100%"><tbody>
            { arr.map((item, idx)=> 
                <tr key={idx}><td className='square h' >
                    {item[1] > 0 ? item[1] : null}
                    <Animal animalId={item[0]} />
                </td></tr>) 
            }
        </tbody></table>
        
    )
}
export default LeftHeader;