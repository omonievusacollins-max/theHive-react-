import './Cart.css'
import {NavLink} from 'react-router-dom';
import CustomizeModal from './Component/CustomizeModal';

import {useState} from 'react'


// hooks
import usePersistenceState from '../../hooks/usePersistenceState'
import useLongPress from '../../hooks/useLongPress'
function Cart(){
  // State to manage Customized modal
  const [open, setOpen] = usePersistenceState('closed');
  
  const tapAndHold = useLongPress(()=> setOpen('open'), 400)
  return(
    <div className="cartBody">
      <p className="note">Tap to Customize</p>
      <div id="mealContainer" {...tapAndHold}>
        <img src="/assets/BugerImage.png" alt="burger" className="mealImage"/>
        <div>
          <div className="mealContent">
            <p className="mealName">Double Decker</p>
            <p className="mealExtra">Hot, Extra Sausage</p>
          </div>
          <div className="amount">
            <p>N10,000</p>
            <div className="quantityContainer no-hold">
              <button>-</button>
              <p className="quantity">2</p>
              <button>+</button>
            </div>
          </div>
         
        </div>
        
      </div>
      
      <div id="mealContainer">
        <img src="/assets/BugerImage.png" alt="burger" className="mealImage"/>
        <div>
          <div className="mealContent">
            <p className="mealName">Double Decker</p>
            <p className="mealExtra">Hot, Extra Sausage</p>
          </div>
          <div className="amount">
            <p>N10,000</p>
            <div className="quantityContainer">
              <button>-</button>
              <p className="quantity">2</p>
              <button>+</button>
            </div>
          </div>
         
        </div>
        
      </div>
      
      <div id="mealContainer">
        <img src="/assets/BugerImage.png" alt="burger" className="mealImage"/>
        <div>
          <div className="mealContent">
            <p className="mealName">Double Decker</p>
            <p className="mealExtra">Hot, Extra Sausage</p>
          </div>
          <div className="amount">
            <p>N10,000</p>
            <div className="quantityContainer">
              <button>-</button>
              <p className="quantity">2</p>
              <button>+</button>
            </div>
          </div>
         
        </div>
        
      </div>
      <div className="refreshingDrink">
        <p>Coming soon</p>
        <div>
          <div className="drinksContainer">
            <img src="/assets/Drinks.svg" alt="Drink"/>
          </div>
          <p><span>Add a refreshing drink?</span><br/> Pair your meal with a<br/> cool lemonade.</p>
          <button>Add</button>
        </div>
      </div>
      <div className="summary">
        <div>
          <p>Summary</p>
          <div className="subtotalContainer">
            <p>SubTotal</p>
            <p>N17,500</p>
          </div>
          <div className="extrasContainer">
            <p>Extras</p>
            <p>N1,500</p>
          </div>
          <hr className="hr"/>
          <div className="totalContainer">
            <p>Total</p>
            <p>N19,000</p>
          </div>
        </div>
      </div>
      <NavLink to="/Checkout" className="checkoutNav">
        <button className="checkoutBtn">
          Go to Checkout 
          <img src="/assets/arrowRight.svg" alt="forwardArrow"/>
        </button>
      </NavLink>
      <CustomizeModal openModal={open} setOpenModal={setOpen}/>
    </div>
  )
}
export default Cart