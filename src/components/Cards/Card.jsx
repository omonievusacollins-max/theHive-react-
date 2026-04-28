import './card.css'
function Card({description, amount, svg, color}){
    return(
        <div className='container'>
            <div className="imageContainer" style={{background: color}}>
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