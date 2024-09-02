import { memo } from 'react'
import Animal from "./Animal";

const AnimalHeader = memo(({arr}) => {
    // console.log("AnimalHeader")
    
    return (
        <>
            { 
                arr.map(([animalId, count]) => {

                    return(
                        <div className='game_box animal' key={animalId}>
                            {
                                count>0 && 
                                <>
                                    <Animal animalId={animalId} />  
                                    <b> : {count} </b>
                                </>
                            }
                        </div>
                    )
                }) 
            } 
        </>
        
    )
})
export default AnimalHeader;