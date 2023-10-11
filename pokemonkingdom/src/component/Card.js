import { useState } from 'react';
import './Card.css'
import ExpendedView from './ExpendedView';

function Card(props){
    const {pokeInfo}=props
    const [showModel,setShowModel]=useState(false);
    // console.log(pokeInfo)
    function handelModelView(){
        if(!showModel){
            setShowModel(true)
        }
    }

    return(
        <>
            <div className={` card ${pokeInfo.type}` }>
                <h3>#{pokeInfo.id}</h3>
                <img src={pokeInfo.image} alt={pokeInfo.name}/>
                <h3>{pokeInfo.name.toUpperCase()}</h3>
                <h4>Type : {pokeInfo.type}</h4>
                <button onClick={handelModelView}>More Info</button>
            </div>
            {showModel && (<ExpendedView 
            pokeInfo={pokeInfo}
            setShowModel={setShowModel}/>)}
        </>
    )

}
export default Card;