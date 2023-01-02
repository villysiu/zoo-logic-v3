import lion from '../images/lion.png'
import zebra from '../images/zebra.png'
import hippo from '../images/hippo.png'
import { memo } from 'react'
const Animal = ({animalId}) => {
    // console.log(animalId)
    if(animalId===0) return null;
    
    const getAnimal = (animalId) =>{
        switch (animalId) {
            case 1:
                return {id: 1, animal: "hippo", url: hippo}
            case 2:
                return {id: 2, animal: "lion", url: lion}
            case 3:
                return {id: 3, animal: "zebra", url: zebra}
            default:
                return {id: 0, animal: null, url: null}
        }
    }

    const {animal, url} = getAnimal(animalId);

    return (
        <img src={url} width='50%' alt={animal}></img>
    )
}
export default memo(Animal);