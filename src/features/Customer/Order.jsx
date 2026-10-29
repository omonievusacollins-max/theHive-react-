import useMenu from '../../hooks/useMenu.js'
import './Order.css'
function Order(){
  const menu = Object.entries(useMenu());
  console.log(menu)
  
  return (
    <div>
      
    </div>
  )
}

export default Order