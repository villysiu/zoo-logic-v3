import Animal from "./Animal";
const LeftHeader = ({arr}) => {

    return (
        <table height="100%" width="100%"><tbody>
            { arr.map((item, idx)=> 
                <tr><td className='square h' key={idx}>
                    {item.count}
                    <Animal animalId={item.animalId} />
                </td></tr>) 
            }
        </tbody></table>
        
    )
}
export default LeftHeader;