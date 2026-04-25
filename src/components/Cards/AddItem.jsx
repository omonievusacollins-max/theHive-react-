import Button from '../Buttons/Button';
import './AddItem.css';
function AddITem(){
    return(
        <div className="AddItemContainer">
            <div className="groupItems">
                <input type="text" className="Item" placeholder='Name of Item'/>
                <input type="text" className="price" placeholder='Price'/>
                <select name="Category" id="select">
                    <option value="Burger">Category</option>
                </select>
                <Button text={'Save'} altText={''}/>
            </div>
        </div>
    )
}

export default AddITem;