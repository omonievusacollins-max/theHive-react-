import './card.css'
function Card({description, amount, svg}){
    return(
        <div className='container'>
            <div className="imageContainer">
                <img src={svg} alt="svg" />  
            </div>

            <div className='description-amount'>
                <p id='description'>{description}</p>
                <h1 id='amount'>{amount}</h1>
            </div>
        </div>
    )
}

export default Card