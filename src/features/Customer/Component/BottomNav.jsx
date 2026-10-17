// Grey icons
const cutlerriesGrey = '/assets/cutlerries-grey.svg';
const cartGrey = '/assets/cart-grey.svg';
const receiptGrey = '/assets/reciept-grey.svg';

// Red icons
const cutlerriesRed = '/assets/cutlerries-red.svg';
const cartRed = '/assets/cart-red.svg';
const receiptRed = '/assets/reciept-red.svg';

import './BottomNav.css'
import {NavLink} from 'react-router-dom';

function BottomNav(){
    return (
        <nav className="bottomNavContainer">
          
          <NavLink to="/menu" className="menu">
            {({isActive}) => (
            <>
              <img src={isActive ? cutlerriesRed : cutlerriesGrey} alt="cutlerries"/>
              <p className = {isActive ? "active" : '' }>Menu</p>
            </>
            )}
          </NavLink>
          
          <NavLink to="/cart" className="cart">
            {({isActive}) => (
            <>
              <img src={isActive ? cartRed : cartGrey} alt="cart"/>
              <p className = {isActive ? "active" : '' }>Cart</p>
            </>
            )}
          </NavLink>
          
          <NavLink to="/order" className="order">
            {({isActive}) => (
            <>
              <img src={isActive ? receiptRed : receiptGrey} alt="reciept"/>
              <p className = {isActive ? "active" : '' } >Orders</p>
            </>
            )}
          </NavLink>
        </nav>
    )
}
export default BottomNav