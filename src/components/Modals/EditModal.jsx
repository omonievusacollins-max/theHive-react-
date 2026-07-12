import { useState } from 'react';
import Button from '../Buttons/Button';
import CategoryDropdown from '../Inputs/CategoryDropDown';
import AddItem from '../Cards/ItemForm';
import './EditModal.css'
function EditModal(){
    return(
        <>
        <div className="AddContainer">
            <AddItem/>
        </div>
        </>
    )
}
export default EditModal