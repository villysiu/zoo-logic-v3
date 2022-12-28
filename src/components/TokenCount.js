import Animal from "./Animal"
import { memo } from "react"
const TokenCount = memo(({tokenCount, width}) => {  
    // console.log(tokenCount)
    return(
        <table width={width*0.7} height={width*0.7/3} className="gameboard" ><tbody>
            <tr>
                {
                    tokenCount.map((count, idx) => (
                     idx>0 &&   
                    <td key={idx} width="33.3333%">
                        <Animal animalId={idx} />
                       {' '}: {count}</td>
         
                    ))
                }
            </tr>
            </tbody></table>
 
    )
})
export default TokenCount