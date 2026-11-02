//Style
import './EmptyCart.css'
// hook
import {NavLink} from 'react-router-dom';
// Components
import Button from './Button'

function EmptyCart(){
  return(
    <div className="emptyCart">
      <p>!Oops, you have not <br/> ordered anything yet</p>
      
      <NavLink to="/Menu" className="checkoutNav">
        <Button text={'Go to menu'} style={{width: '200px'}}/>
      </NavLink>
    </div>
  )
}
export default EmptyCart