import Animal from "./Animal"

const TokenCount = ({arr, width}) => {  
    return(
        <table width={width*0.7} height={width*0.7/3} className="gameboard" ><tbody>
            <tr>
                {
                    arr.map((item, idx) => (
                        <>
                    <td width={width/3}>
                        <Animal  animalId={item[0]} />
                       {' '}: {item[1]}</td>
                    </>
                    ))
                }
            </tr>
            </tbody></table>
 
    )
}
export default TokenCount