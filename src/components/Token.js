import Animal from "./Animal"

const Token = ({animalId, coordinate, setGameBoard, tokenLeft }) => {

    const handleClick = e =>{
        e.preventDefault();
        do{
            animalId=(animalId+1)%4
        }while(animalId!==0 && tokenLeft[animalId-1][1]===0)
        // console.log(animalId)
        
        setGameBoard((prev)=>{
            // console.log(prev)
            return (
                prev.map((row, r)=>{
                    return row.map((num, c)=>{
                        return (r===coordinate[0] && c===coordinate[1]) ? animalId : num
                    })
                })
            )
         })
    }
    return (

        <td className='square w' onClick={handleClick}>
            <Animal animalId={animalId} />
        </td>

    )
}
export default Token