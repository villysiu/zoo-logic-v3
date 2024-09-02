import lion from '../images/lion.png'
import zebra from '../images/zebra.png'
import hippo from '../images/hippo.png'
import notFound from '../images/image-not-found-icon.png'
import { memo } from 'react'
const Animal = ({animalId}) => {

    if(animalId<0 || animalId>3) 
        return <img src={notFound} className="animal_icon" alt="" />
    
    const animalArray = [
        [], [ "hippo", hippo], ["lion", lion], ["zebra", zebra]
    ]
    
    const [animal, url] = animalArray[animalId];
    return (
        <img src={url} className="animal_icon" alt={animal} />
    )
}
export default memo(Animal);