import Animal from "./Animal";
const TopHeader = ({arr}) => {
    //header: [[[2,1],[3,1],[1,1]],[[3,2],[0,0],[1,1]]],
    return (
        <table height="100%" width="100%"><tbody><tr>
            { arr.map((item, idx)=> 
            
                <td className='square w' key={idx}>
                    {item[1]}
                    <Animal animalId={item[0]} />
                </td>) 
            }
            </tr></tbody>
        </table>
        
    )
}
export default TopHeader;