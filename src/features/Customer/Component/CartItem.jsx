import './CartItem.css'

// Utils
import { capitalizeWords } from '../../../Utils/capitalizeFirstWords.js';
import {useCart} from '../../../Context/CartProvider'

//hooks
import useLongPress from '../../../hooks/useLongPress'

function CartItem({item, onSelect, updateQty}){
  
  const {cart, removeLine} = useCart();
  const longPress = useLongPress(()=> onSelect(item), 400)
  
  return(
    <>
      <div class="meal_Container" key={item.lineId} {...longPress}>
        <img src="/assets/BugerImage.png" alt="burger" className="mealImage"/>
        <div>
          <div className="mealContent">
            <p className="mealName">{capitalizeWords(item.name)}</p>
            <p className="mealExtra">Hot, Extra Sausage</p>
          </div>
          <div className="amount">
            <p>N{item.price * item.qty}</p>
            <div className="quantityContainer no-hold">
              <button onClick ={()=> updateQty(item.lineId, item.qty - 1)} disabled={item.qty===1}>-</button>
              <p className="quantity">{item.qty}</p>
              <button onClick ={()=> updateQty(item.lineId, item.qty + 1)}>+</button>
            </div>
          </div>
         
        </div>
        
      </div>
    </>
  )
}
export default CartItem