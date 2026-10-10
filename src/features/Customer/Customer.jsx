import logo from "/assets/LOGO.svg"
import avatar from "/assets/Avatar.svg"
import './Customer.css'
import BottomNav from './BottomNav'
import happyBurger from '/assets/happyBurgerCropped.png'
function Customer(){
  return(
    <div>
      <header className="logoContainer">
        <div>
          <img src={logo} alt="logo"/>
          <p>Menu</p>
        </div>
        <img src={avatar} alt="logo"/>
      </header>
      
      <div className="banner">
        <img src={happyBurger} alt="A happy smiling burger" className="happyBurger"/>
        <div className="taste">
          <span>Fast</span>
          <span>.</span>
          <span>Fresh</span>
          <span>.</span>
          <span>Creamy</span>
        </div>
        <h1>Order Tasty, <br/> Take home, Delivery</h1>
        <p>Authentic Benin sharwarmas, creamy stir-fry <br/> pasta, and juicy flame burger</p>
      </div>
      <div className="searchContainer">
        <input type="text" className="search" placeholder="What are you craving ?" />
      </div>

      
      
      
      <BottomNav/>
    </div>
  )
}
export default Customer;