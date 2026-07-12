import './Search.css';
import { useState } from 'react';
function Search( {placeholder, searchTerm, setSearchTerm, setDropDown, paddingValue}){
    return(
        <div className='searchWrap'>
            <input type="text" className="search" placeholder={placeholder} value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} style={{padding: paddingValue}}/>
            <img src="./assets/Search.svg" alt="search icon" className='searchIcon'/>
        </div>
    )
}
export default Search