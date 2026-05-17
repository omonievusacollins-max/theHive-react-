import './CategoryDropDown.css';
// import menu from "../Table/menu.json";
function CategoryDropDown({filteredCategory, dropDown, setDropDown}){
    return(
            <select name="category" id="categoryDropDown" onChange={(e) => setDropDown(e.target.value)}>
                  <option value="all" selected>All Categories</option>
                {filteredCategory.map((category) => {
                    return <option key={category} value={category}>{category}</option>;
                })}
            </select>
    )
}
export default CategoryDropDown;