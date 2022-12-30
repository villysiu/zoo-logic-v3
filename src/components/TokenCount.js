import Animal from "./Animal"
import { memo } from "react"
const TokenCount = memo(({tokenCount, width}) => {  
    // console.log(tokenCount)
    return(
        <table className="count"><tbody>
         
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