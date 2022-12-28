import Animal from "./Animal";
const HeaderSquare = ({animalId, count}) =>{
    // console.log("header square")
    const Count = ({num}) =>{
        const str=" : "+num
        return str
    }
    return (
        <>
            { count>0 && <Animal animalId={animalId} /> }
            { count>0 && <Count num={count} /> }
        </>
    )
}
export default HeaderSquare