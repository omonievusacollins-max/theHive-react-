// CSS
import './Cart.css'

// COMPONENTS
import {NavLink} from 'react-router-dom';
import CustomizeModal from './Component/CustomizeModal';
import EmptyCart from './Component/EmptyCart'
import Button from './Component/Button'
import CartItem from './Component/CartItem'

// hooks
import {useState} from 'react'
import usePersistenceState from '../../hooks/usePersistenceState'
import useLongPress from '../../hooks/useLongPress'

// Context
import {useCart} from '../../Context/CartProvider'

// Utils
import { capitalizeWords } from '../../Utils/capitalizeFirstWords.js';

function Cart(){
  // Mathematics SubTotal, Total, Qty, and more
  const {cart, updateQty} = useCart();
  const subtotal = cart.reduce((sum, l)=> sum + l.price * l.qty, 0)
  
  //Clear cart
  function clearCart(){
    localStorage.removeItem('hive-cart')
    cart.length = 0
    console.log(cart.length)
  }
  
  // State to manage Customized modal
  const [open, setOpen] = useState('closed');
  
  // const tapAndHold = useLongPress(()=> setOpen('open'), 400)
  const [line, setLine] = useState('')
  // Empty cart
  if(cart.length === 0){
    return (
      <div className="empty-cart">
        <EmptyCart/>
      </div>
    )
  }
  
  return(
    <>
    
    <div className="cartBody">
      <p className="note">Tap to Customize</p>
      {
        cart.map(item => (
        <CartItem key={item.lineId} item={item} updateQty={updateQty} onSelect={(line) => {setLine(line); setOpen('open')}}/>
        ))
      }
      
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
            <p>{subtotal}</p>
          </div>
          <div className="extrasContainer">
            <p>Extras</p>
            <p>N1,500</p>
          </div>
          <hr className="hr"/>
          <div className="totalContainer">
            <p>Total</p>
            <p>N{subtotal + 1500}</p>
          </div>
        </div>
      </div>
      
      <NavLink to="/Checkout" className="checkoutNav">
        <Button text={'Go to Checkout'}/>
        {/*<button className="checkoutBtn">
          Go to Checkout 
          <img src="/assets/arrowRight.svg" alt="forwardArrow"/>
        </button>*/}
      </NavLink>
      
      <CustomizeModal openModal={open} setOpenModal={setOpen} selectedLine={line}/>
    </div>
    </>
  )
}
export default Cart