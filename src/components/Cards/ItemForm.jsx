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

    const [display, setDisplay] = useState(false);

    return(
        <div className="AddItemContainer" style={{display: display === false ? 'none' : 'block'}}>
            <img src="./assets/closeIcon.svg" alt="" className='closeIcon' onClick={()=> setDisplay(true)}/>
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