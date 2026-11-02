//css
import './Checkout.css'
//hooks
import {useState} from 'react'
import {NavLink} from 'react-router-dom';
import usePersistenceState from '../../hooks/usePersistenceState'

// components
import Button from './Component/Button'

// Context
import {useCart} from '../../Context/CartProvider'

// Icons
const icons = {
  delivery: {
    white: '/assets/DeliveryScooter.svg',
    brown: '/assets/DeliveryScooterBrown.svg'
  },
  pickup:{
    white: 'assets/PickupCartWhite.svg',
    brown: 'assets/PickupCart.svg'
  },
  forwardArrow: '/assets/arrowRight.svg'
}

function Checkout(){
  const [orderType, setOrderType] = usePersistenceState("pickup", []);
  
  const {removeLine} = useCart()
  
  return(
    <div className="checkoutBody">
      <div className="orderType">
        
        <div className={orderType === 'delivery' ? 'optionDelivery activeFufillment' : 'optionDelivery'} onClick={ ()=> setOrderType('delivery') }>
          <img src={orderType === 'delivery' ? icons['delivery'].white : icons['delivery'].brown} alt="motor-cycle"/>
          <p>Delivery</p>
        </div>
        
        <div className={orderType === 'pickup' ? 'optionPickup activeFufillment' : 'optionPickup'} onClick={ ()=> setOrderType('pickup')}>
          <img src={orderType === 'pickup' ? icons['pickup'].white : icons['pickup'].brown} alt="shoping-cart"/>
          <p>Pickup</p>
        </div>
        
      </div>
      <div className="form">
        
        <div className="contactContainer inputContainer">
          
          <img src="/assets/Contact.svg" alt="avatar"/>
          
          <label for="Customer name"> Who's eating ?</label>
          
          <input type="text" name="Customer name" placeholder="Collins Omonievusa"/>
          
        </div>
        
        <div className="numberContainer inputContainer">
          <img src="/assets/Phone.svg" alt="avatar"/>
          
          <label for="Customer name">Contact number</label>
          
          <input type="Number" name="phone number" placeholder="08104900678"/>
          
        </div>
        
        {
          orderType === 'delivery' && 
          <div className="deliveryLocation">
          <div>
            <div className="time">
              <p>Where to?</p>
              <div className="timeInterval">
                <img src="/assets/Clock.svg" alt="clock" className="clock"/>
                <p>30-45 min</p>
              </div>
              
            </div>
            <input type="text" className="inputLocation"/>
          </div>
        </div>
        }
        
      </div>
      
      <div className="calcPrice">
        <div>
          <p>Subbtotal</p>
          <p>N17500</p>
        </div>
        <hr/>
        <div>
          <p>Delivery</p>
          <p>N1500</p>
        </div>
        <div>
          <p>Extras</p>
          <p>N1500</p>
        </div>
        <div>
          <p>Total</p>
          <p>N20500</p>
        </div>
      </div>
      
      <NavLink to="/OrderSuccess" className="checkoutNav">
        <Button text={'Place order'} iconSrc={icons.forwardArrow}/>
      </NavLink>

    </div>
  )
}
export default Checkout