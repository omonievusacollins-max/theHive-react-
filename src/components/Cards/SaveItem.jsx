import Button from '../Buttons/Button';
import './SaveItem.css'
function SaveItem({onClose, onSave}){
    return(
        <div className="Container">
            <img src="./assets/closeIcon.svg" alt="" className='closeIcon' onClick={() => onClose()}/>
            <p>Are you sure ?</p>
            <div className='Buttons'>
                <Button text={'Yes'} onClick={() => onSave()}/>
                <Button text={'No'} onClick={() => onClose()}/>
            </div>
        </div>
    )
}

export default SaveItem;