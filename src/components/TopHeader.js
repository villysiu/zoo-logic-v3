import HeaderSquare from './HeaderSquare'
const TopHeader = ({arr}) => {
    
    return (
        <table height="100%" width="100%"><tbody><tr>
            { arr.map((item, idx)=> 
                <td className='square w' key={idx}>
                    <HeaderSquare animalId={item[0]} count={item[1]} />
                </td>) 
            }
            </tr></tbody>
        </table>
        
    )
}
export default TopHeader;