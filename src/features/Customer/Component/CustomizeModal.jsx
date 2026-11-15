// style
import './CustomizeModal.css'
// Components
import Button from './Button'
// Context
import {useCart} from '../../../Context/CartProvider'
//hook
import {useState} from 'react';
// Utils
import { capitalizeWords } from '../../../Utils/capitalizeFirstWords.js';

function CustomizeModal({openModal, setOpenModal, selectedLine, modalHeader, extras, qty}){
  
  // USESTATES
  const {cart, removeLine} = useCart();
  const [spice, setSpice] = useState('no spice');
  
  const extraList = extras[selectedLine.category] || []
  return (
    <div className= {openModal === "closed" ? "customizeModal" : "customizeModal openSheet"}>
      <header>
        <div className="imgContainer">
        <img src="/assets/burgerIcon.svg"/>
        </div>
        <div>
          <h3>{capitalizeWords(modalHeader)}</h3>
          <p>Applies to all <span>{qty}</span> in your cart</p>
        </div>
        <img src="/assets/closeIcon.svg" alt="closeIcon" className="closeIcon" onClick={()=> setOpenModal('closed')}/>
      </header>
      
      <div className="spiceLevel">
        <p>Spice level</p>
        <div className="levels">
          <div className={spice === 'no spice' ? 'activeSpice' : ''} onClick={()=> setSpice('no spice')}>No Spice</div>
          <div className={spice === 'mild' ? 'activeSpice' : ''} onClick={()=> setSpice('mild')}>Mild</div>
          <div className={spice === 'hot' ? 'activeSpice' : ''} onClick={()=> setSpice('hot')}>Hot</div>
        </div>
      </div>
      
      {extraList.length > 0 && (
        <div className="extra">
        <p>Add extra</p>
        {extraList.map(extra => (
          <div key={extra.id}>{capitalizeWords(extra.name)}
          <img src="/assets/blackCheck.svg" alt="check"/>
          </div>
        ))}
        </div>
      )}
      
      <label for="kitchenNote" id="kitchenNote">Note for the kitchen</label>
      <input type="text" placeholder="e.g wrap the extra turkey seperately" className="kitchenNote"/>
      <Button text={'Save Changes'}/>
      <Button text={'Delete'} style={{backgroundColor: 'var(--grey,)', color: 'black',}} onClick={()=> {removeLine(selectedLine.lineId); setOpenModal('closed')}}/>

    </div>
  )
}
export default CustomizeModal