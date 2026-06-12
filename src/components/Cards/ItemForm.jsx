// Reusable form for collecting item name, price, and category.
import Button from '../Buttons/Button';
import './ItemForm.css';
import CategoryDropdown from '../Inputs/CategoryDropDown';
import {useState} from 'react';
function AddITem({onSave, onClose}){
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const handleSave = () => {
        onSave({name, price, category});
    }
    // I'll come back to this
    return(
        <div className="AddItemContainer">
            <img src="./assets/closeIcon.svg" alt="" className='closeIcon'/>
            <div className="groupItems">
                <input type="text" className="Item" placeholder='Name of Item'/>
                <input type="text" className="price" placeholder='Price'/>
                <CategoryDropdown/>
                <Button text={'Save'} altText={''} enableHover={false}/>
            </div>
        </div>
    )
}

export default AddITem;