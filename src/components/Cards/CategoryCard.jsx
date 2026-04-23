import './CategoryCard.css'
function CategoryCard({src, color}){
    return(
        <div style={{background: color}} className='CategoryCard-container'>
            <p>Burger</p>
            <img src={src} alt="pic" className='CategoryCard-image'/>
        </div>
    )
}
export default CategoryCard