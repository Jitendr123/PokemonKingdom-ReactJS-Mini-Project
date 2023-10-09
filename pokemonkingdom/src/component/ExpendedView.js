import './Card.css'
function ExpendedView(props){
    const{setShowModel}=props

    function toggleHandler(){
        setShowModel(false)
    }


    return(
        <div className="model">
            <button onClick={toggleHandler}>X</button>
            <h1>model</h1>
        </div>
    )

}
export default ExpendedView;