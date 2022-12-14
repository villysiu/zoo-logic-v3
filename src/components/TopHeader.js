import Animal from "./Animal";
const TopHeader = ({arr}) => {
    console.log(arr)
    return (
        <table height="100%" width="100%"><tbody><tr>
            { arr.map((item, idx)=> 
            
                <td className='square w' key={idx}>
                    {item.count}
                    <Animal animalId={item.animalId} />
                </td>) 
            }
            </tr></tbody>
        </table>
        
    )
}
export default TopHeader;