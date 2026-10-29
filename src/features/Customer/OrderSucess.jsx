// Import Hooks
import useMenu from '../../hooks/useMenu.js'
function OrderSuccess(){
  const menu = Object.entry(useMenu())
  console.log(menu)
  return(
    <div>
      <div className="animation">
        <img src="haja" alt="OrderSuccess"/>
      </div>
      
    </div>
  )
}

export default OrderSuccess