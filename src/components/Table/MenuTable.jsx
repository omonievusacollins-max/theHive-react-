// import menu from "./menu.json";
import './MenuTable.css'
import burgerIcon from '/assets/RedBurger.svg' // import the burger icon
import sandwichIcon from '/assets/sandwich.svg' // import the sandwich icon
import shawarmaIcon from '/assets/shawarmaIcon.svg' // import the shawarma icon
import pastaIcon from '/assets/spaghettiIcon.svg' // import the spaghetti icon
import sidedishIcon from '/assets/sideDishes.svg' // import the side dishes icon
import Search from '../Inputs/Search';
import { useState } from "react";
    const categoryIcons = {
        burger: burgerIcon,
        sandwich: sandwichIcon,
        shawarma: shawarmaIcon,
        pasta: pastaIcon,
        "side dishes and extras": sidedishIcon

    }
    return(
        <table className="menu-table">
            <thead>
                <tr>
                    <th>Item Details</th>
                    <th>Category</th>
                    <th>Price</th>
                    <th>Actions</th>
                </tr>
            </thead>
        </table>
    )
}