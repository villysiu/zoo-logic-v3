import Animal from "./Animal"

const NinexNine = ({arr}) =>{
    console.log(arr)

    
    return(
        <table width='100%' height='100%'>
            <tbody>
                {arr.map((row, rid)=>(
                    // <tr key={rid}><Token row={row}/></tr>
                    <tr className='square h' key={rid}>
                        <td className='square w'><Animal animalId={row[0]} /></td>
                        <td className='square w'><Animal animalId={row[1]} /></td>
                        <td className='square w'><Animal animalId={row[2]} /></td>
                    </tr>
                ))}
            </tbody>    
        </table>
    )
}
export default NinexNine