import logo from "/assets/LOGO.svg"
import avatar from "/assets/Avatar.svg"
import './Customer.css'
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
    </div>
  )
}
export default Customer;