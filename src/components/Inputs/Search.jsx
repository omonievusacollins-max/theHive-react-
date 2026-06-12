import './Search.css';
import { useState } from 'react';
function Search( {placeholder, searchTerm, setSearchTerm, setDropDown}){
    return(
        <div className='inputSearchContainer'>
            <img src="./assets/Search.svg" alt="search icon" className='searchIcon'/>
            <input type="text" className="search" placeholder={placeholder} value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
        </div>
    )
}
export default Search