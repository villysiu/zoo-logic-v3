import { memo } from 'react'
// import HeaderSquare from './HeaderSquare'
import Animal from "./Animal";
const HeaderSquare = memo(({arr}) => {
    // console.log("top header")
    const Count = ({num}) => " : "+num 
    return (
        <>
            { 
                arr.map((item, idx)=>{
                    const animalId=item[0]
                    const count = item[1]
                    return(
                        <div className='row-1-col-1 animal' key={idx}>
                            {
                                count>0 && 
                                <>
                                    <Animal animalId={animalId} />  
                                    <Count num={count} /> 
                                </>
                            }
                        </div>
                    )
                }) 
            } 
        </>
        
    )
})
export default HeaderSquare;