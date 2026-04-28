import Button from '../Buttons/Button';
import './SaveItem.css'
function SaveItem(){
    return(
        <div className="Container">
            <p>Are you sure ?</p>
            <div className='Buttons'>
                <Button text={'Yes'}/>
                <Button text={'No'}/>
            </div>
        </div>
    )
}

export default SaveItem;