import './CategoryDropDown.css';
import menu from '../Table/menu.json';
import { useState } from 'react';
function CategoryDropDown({value, selectedCategory}){
    const category = Object.keys(menu);
    return(
            <select name="category" id="categoryDropDown" onChange={(e) => selectedCategory(e.target.value)}>
                  <option value="all" selected>All Categories</option>
                {category.map((category) => {
                    return <option key={category} value={category}>{category}</option>;
                })}
            </select>
    )
}
export default CategoryDropDown;