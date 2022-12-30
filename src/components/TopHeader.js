import { memo } from 'react'
import HeaderSquare from './HeaderSquare'
const TopHeader = memo(({arr}) => {
    // console.log("top header")
    return (
        <table height="100%" width="100%"><tbody><tr>
            { arr.map((item, idx)=> 
                <td className='square' key={idx}>
                    <HeaderSquare animalId={item[0]} count={item[1]} />
                </td>) 
            }
            </tr></tbody>
        </table>
        
    )
})
export default TopHeader;