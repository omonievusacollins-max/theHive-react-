// import menu from "./menu.json";
import './MenuTable.css'
import burgerIcon from '/assets/RedBurger.svg' // import the burger icon
import sandwichIcon from '/assets/sandwich.svg' // import the sandwich icon
import shawarmaIcon from '/assets/shawarmaIcon.svg' // import the shawarma icon
import pastaIcon from '/assets/spaghettiIcon.svg' // import the spaghetti icon
import sidedishIcon from '/assets/sideDishes.svg' // import the side dishes icon
import Search from '../Inputs/Search';
import { useState } from "react";

function MenuTable( {menu} ){
    const categoryIcons = {
        burger: burgerIcon,
        sandwich: sandwichIcon,
        shawarma: shawarmaIcon,
        pasta: pastaIcon,
        "side dishes and extras": sidedishIcon

    }

    return(
        <table className="menu-table">
            <thead style={{borderRadius: '20px 20px 0 0'}}>
                    <tr>
                        <th className="itemDetails">Item Details</th>
                        <th className="Category">Category</th>
                        <th className="Price">Price</th>
                        <th className="Actions">Actions</th>
                    </tr>
            </thead>
            <tbody>
                {menu.map( meal => (
                    <tr key={meal.id}>
                        <td>
                            <div className="item-info">
                                <img src={meal.image} alt={meal.name} className="item-image"/>
                                <span>{meal.name}</span>
                            </div>
                        </td>

                        <td className="mealCategory">
                            <span className={`badge ${meal.category.toLowerCase()}`}>
                                <img src={categoryIcons[meal.category.toLowerCase()]} alt={meal.category.toLowerCase()} />
                                {meal.category}</span>
                        </td>

                        <td>₦{meal.price}</td>

                        <td className="actions">
                            <button className='deleteIcon'><img src="./assets/redBinIcon.svg" alt="" />Delete</button>
                            <button className='editIcon'><img src="./assets/greenEditIcon.svg" alt="" />Edit</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default MenuTable;