import './Search.css'
function Search( {placeholder}){
    return(
        <div className='inputSearchContainer'>
            <img src="./assets/Search.svg" alt="search icon" className='searchIcon'/>
            <input type="text" className="search" placeholder={placeholder}/>
        </div>
    )
}
export default Search