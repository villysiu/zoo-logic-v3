
import { memo } from 'react'
import HeaderSquare from './HeaderSquare'


const LeftHeader = memo(({arr}) => {
    
        // console.log("left header")
        return (
            <table height="100%" width="100%"><tbody>
                { arr.map((item, idx)=> 
                    <tr key={idx}>
                        <td className='square h' >
                        
                        <HeaderSquare animalId={item[0]} count={item[1]} />
                        
                    </td></tr>) 
                }
            </tbody></table>
        
    )
})
export default LeftHeader;