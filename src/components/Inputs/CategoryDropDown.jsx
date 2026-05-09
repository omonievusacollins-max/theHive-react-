import './CategoryDropDown.css';
function CategoryDropDown(){
    return(
            <select name="category" id="categoryDropDown">
                <option value="all">All Category</option>
                <option value="electronics">Burger</option>
                <option value="clothing">Sandwich</option>
                <option value="home">Spag</option>
                <option value="books">Shawarma</option>
            </select>
    )
}
export default CategoryDropDown;