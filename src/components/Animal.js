import lion from '../images/lion.png'
import zebra from '../images/zebra.png'
import hippo from '../images/hippo.png'
import { memo } from 'react'
const Animal = ({animalId}) => {
    // console.log(animalId)
    if(animalId===0) return null;
    
    const animalArray = [
        [null, null], [ "hippo", hippo], ["lion", lion], ["zebra", zebra]
    ]
    
    const [animal, url] = animalArray[animalId];
    return (
        <img src={url} alt={animal} />
    )
}
export default memo(Animal);