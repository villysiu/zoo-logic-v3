import Animal from "./Animal"
import { memo } from "react"
const TokenCount = memo(({tokenLeft}) => {  
    // console.log(tokenLeft)
    return(

        <div className="token_count_wrapper">
            
            {
                tokenLeft.map((count, idx) => (
                    idx!==0 &&   
                    <div className="token_count_box" key={idx} >
                        <Animal animalId={idx} />{' '}: {count}
                    </div>
            
                ))
            }
            
        </div>
 
    )
})
export default TokenCount