import Animal from "./Animal"

const TokenCount = ({arr, width}) => {  
    return(
        <table width={width} height={width/3} className="gameboard" ><tbody>
            <tr>
                {
                    arr.map((item, idx) => (
                        <>
                    <td key={idx} width={width/3*0.85}>
                        <Animal  animalId={item[0]} />
                    </td>
                    <td width={width/3*0.15} >{item[1]}</td>
                    </>
                    ))
                }
            </tr>
            </tbody></table>
 
    )
}
export default TokenCount