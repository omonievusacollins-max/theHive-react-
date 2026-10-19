import './CategoryPill.css'
import {useState} from "react"
import useMenu from '../../../hooks/useMenu.js'

// Icons outside so it can run for every rerender.
const icons = {
    shawarma:{
      // brown: '/assets/shawarmaIcon.svg',
      brown: '/assets/shawarmaIcon2.svg' },
    burger:{
      brown: '/assets/burgerIcon.svg' 
      // black: '/assets/burgerIcon2.svg'
    },
    pasta:{
      brown: '/assets/pastaIcon.svg'
      // black: '/assets/pastaIcon2.svg' 
    },
    sandwich:{
      brown: '/assets/sandwichIcon.svg'
      // black: '/assets/sandwichIcon2.svg'
    },
    'side dishes and extras':{
      brown: '/assets/Icon(6).svg'   
      // black: '/assets/Icon(6).svg'
      },
  }

const fallbackIcon = { brown: '/assets/Icon(6).svg', black: '/assets/Icon(6).svg' }

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
        
        {category.map((label) => {
          const icon = icons[label] ?? fallbackIcon
          return(
          
          
          <button key={label} className={active === label ? "pill activePill" : "pill"} onClick = { () => {setActive(label)
            activeState(label)}}>
            <img src={icon.brown} alt="icon"/>
            {label}
        </button>
         )
        })}
      </div>
    </div>
  )
}
export default CategoryPill