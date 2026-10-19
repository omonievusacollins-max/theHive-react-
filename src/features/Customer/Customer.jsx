import {useState} from "react"
import { Routes, Route, Navigate, useLocation } from "react-router-dom";

// import images and svgs
import logo from "/assets/LOGO.svg"
import avatar from "/assets/Avatar.svg"
import './Customer.css'

// Pages
import MenuPage from './Menu'
import CartPage from './Cart'
import CheckoutPage from './Checkout'
// Components
import BottomNav from './Component/BottomNav'

const TITLES = {
  "/Menu": "Menu",
  "/Cart": "Cart",
  "/Checkout": "Checkout",
  "/Orders": "Orders",
};

// Customer function
function Customer(){
    const pathName = useLocation()
  return(
    <div className="body">
      <header className="logoContainer">
        <div>
          <img src={logo} alt="logo"/>
          <p>{TITLES[pathName]}</p>
        </div>
        <img src={avatar} alt="logo"/>
      </header>
      <Routes>
        <Route path="/" element={<Navigate to="/Menu" replace />}/>
        <Route path="/Menu" element={<MenuPage/>}/>
        <Route path="/Cart" element={<CartPage/>}/>
        <Route path="/Checkout" element={<CheckoutPage/>}/>
      </Routes>
        
      <BottomNav/>
    </div>
  )
}
export default Customer;