import { memo } from "react"

import Animal from "./Animal"
const Token = ({aid, rid, cid, handleClick}) =>{
    //  console.log(rid, cid, aid)
    return(
        <td key={cid} className='square' onClick={()=>handleClick(rid, cid, aid)}> <Animal animalId={aid} /> </td>
    )
}
export default memo(Token);