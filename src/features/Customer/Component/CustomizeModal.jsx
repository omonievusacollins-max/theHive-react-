// style
import './CustomizeModal.css'
// Components
import Button from './Button'
// Context
import {useCart} from '../../../Context/CartProvider'
function CustomizeModal({openModal, setOpenModal, selectedLine}){
  
  const {cart, removeLine} = useCart();
  
  return (
    <div className= {openModal === "closed" ? "customizeModal" : "customizeModal openSheet"}>
      <header>
        <div className="imgContainer">
        <img src="/assets/burgerIcon.svg"/>
        </div>
        <div>
          <h3>Double decker</h3>
          <p>Applies to all <span>2</span> in your cart</p>
        </div>
        <img src="/assets/closeIcon.svg" alt="closeIcon" className="closeIcon" onClick={()=> setOpenModal('closed')}/>
      </header>
      
      <div className="spiceLevel">
        <p>Spice level</p>
        <div className="levels">
          <div>No Spice</div>
          <div>Mild</div>
          <div>Hot</div>
        </div>
      </div>
      
      <div className="extra">
        <p>Add extra</p>
        <div>Cheese</div>
        <div>Veggies</div>
      </div>
      
      <label for="kitchenNote" id="kitchenNote">Note for the kitchen</label>
      <input type="text" placeholder="e.g wrap the extra turkey seperately" className="kitchenNote"/>
      <Button text={'Save Changes'}/>
      <Button text={'Delete'} style={{backgroundColor: 'var(--grey,)', color: 'black',}} onClick={()=> {removeLine(selectedLine); setOpenModal('closed')}}/>

    </div>
  )
}
export default CustomizeModal