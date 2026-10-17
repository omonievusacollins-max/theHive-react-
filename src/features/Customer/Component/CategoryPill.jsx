import './CategoryPill.css'
import {useState} from "react"
import useMenu from '../../../hooks/useMenu.js'
function CategoryPill({activeState}) {
  const menu = useMenu()
  const category = Object.keys(menu);
  const [active, setActive] = useState('all')
  
  // Pill icons
  // Brown
  const sidedishesIconBrown = "/assets/Icon(6).svg"
  const burgerIconBrown = '/assets/burgerIcon.svg'
  const sandwichIconBrown = '/assets/sandwichIcon.svg'
  const pastaIconBrown = '/assets/pastaIcon.svg'
  
  // Black
  const shawarmaIconBlack = '/assets/shawarmaIcon2.svg'
  
  return(
    <div className="pillsContainer">
      
      <div className="pills">
        <button className={active === 'all' ? "pill activePill" : "pill"} onClick = { () =>{ setActive('all')
          activeState('all')}}>All</button>
        
        {category.map((label) => (
          <button key={label} className={active === label ? "pill activePill" : "pill"} onClick = { () => {setActive(label)
            activeState(label)}}>
            <img src={pastaIconBrown} alt="icon"/>
            {label}
        </button>
        ))}
      </div>
    </div>
  )
}
export default CategoryPill