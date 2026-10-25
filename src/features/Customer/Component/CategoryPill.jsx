import './CategoryPill.css'
import {useState} from "react"
import useMenu from '../../../hooks/useMenu.js'

// Icons outside so it can run for every rerender.
const icons = {
    shawarma:{
      brown: '/assets/shawarmaIcon2.svg',
      black: '/assets/shawarmaIcon2Black.svg' },
    burger:{
      brown: '/assets/burgerIcon.svg', 
      black: '/assets/burgerIconBlack.svg'
    },
    pasta:{
      brown: '/assets/pastaIcon.svg',
      black: '/assets/pastaIconBlack.svg'
    },
    sandwich:{
      brown: '/assets/sandwichIcon.svg',
      black: '/assets/sandwichIconBlack.svg'
    },
    'side dishes and extras':{
      brown: '/assets/sideDishes.svg',  
      black: '/assets/sideDishesBlack.svg'
      },
  }

const fallbackIcon = { brown: '/assets/Icon(6).svg', black: '/assets/Icon(6).svg' }

function CategoryPill({activeState}) {
  const menu = useMenu()
  const category = Object.keys(menu);
  const [active, setActive] = useState('all')
  
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
            <img src = {active === label ? icon.black : icon.brown} alt="icon"/>
            {label}
        </button>
         )
        })}
      </div>
    </div>
  )
}
export default CategoryPill