// Reusable form for collecting item name, price, and category.
import Button from '../Buttons/Button.jsx';
import './EditModal.css';
import CategoryDropdown from '../Inputs/CategoryDropDown.jsx';
import {useState, useEffect} from 'react';

    function EditModal({initialValues, onSave, onClose}){
        const [name, setName] = useState('');
        const [price, setPrice] = useState('');
        const [category, setCategory] = useState('');

        const handleSave = () => {
            onSave({name, price, category});
            console.log('Saved item:', {name, price, category});
        }

        useEffect(() => {
        if (initialValues) {
            setName(initialValues.name ?? '');
            setPrice(initialValues.price ?? '');
            setCategory(initialValues.category ?? '');
        }
    }, [initialValues]);

    return(
        <div className="AddItemContainer">
            <img src="./assets/closeIcon.svg" alt="" className={'closeIcon'} onClick={onClose}/>
            <div className="groupItems">
                <input type="text" className={"Item"} placeholder={'Name of Item'} onChange={(e) => setName(e.target.value) } value={name}/>
                <input type="text" className="price" placeholder='Price' onChange={(e) => setPrice(e.target.value) } value={price}/>
                <CategoryDropdown value={category} selectedCategory={setCategory}/>
                <Button text={'Save'} altText={''} enableHover={false} onClick={handleSave}/>
            </div>
        </div>
    )
}

export default EditModal;