
import './Card.css'
 function ExpendedView(props){
    const{setShowModel,pokeInfo}=props

    const{image,name,type,stats,height,weight,id}=pokeInfo

    const stat= stats.map((item)=>{
        const {base_stat : number,stat}=item
        const name=stat.name;
        console.log(number,stat.name)
        return {number,name }
    })
    console.log(stat,'hello')



    function toggleHandler(){
        setShowModel(false)
    }



    return(
        <div className={`model ${type}`}>
            <button onClick={toggleHandler}>X</button>
            <div className='leftPart'>
                <img src={image} alt={name}/>
                <h1>{name.toUpperCase()}</h1>
            </div>

            <div className={`rightPart ${type}`}>
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <table>
                                    <tbody>
                                    <tr>
                                        <td>Id </td>
                                        <td>: </td>
                                        <td>{id}</td>
                                    </tr>    
                                    <tr>    
                                        <td>Type </td>
                                        <td>: </td>
                                        <td>{type.toUpperCase()}</td>
                                    </tr>    
                                    <tr>
                                        <td>Weight </td>
                                        <td>: </td>
                                        <td>{weight}</td>
                                    </tr>    
                                    <tr>    
                                        <td>Height </td>
                                        <td>: </td>
                                        <td>{height}</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </td>
                            <td>
                                <table>
                                    <tbody>
                                        {stat.map((item)=>(
                                            <tr>
                                                <td>{item.name.toUpperCase()}</td>
                                                <td>: </td>
                                                <td>{item.number}</td>
                                            </tr>
                                        ))}
                                        
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                    </tbody>
                </table>

            </div>

        </div>
    )

}
export default ExpendedView;