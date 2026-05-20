// import menu from "./menu.json";
import './MenuTable.css'
import burgerIcon from '/assets/RedBurger.svg' // import the burger icon
import sandwichIcon from '/assets/sandwich.svg' // import the sandwich icon
import shawarmaIcon from '/assets/shawarmaIcon.svg' // import the shawarma icon
import pastaIcon from '/assets/spaghettiIcon.svg' // import the spaghetti icon
import sidedishIcon from '/assets/sideDishes.svg' // import the side dishes icon
import Search from '../Inputs/Search';
import { useState, useEffect } from "react";

function MenuTable( {menu} ){
    const categoryIcons = {
        burger: burgerIcon,
        sandwich: sandwichIcon,
        shawarma: shawarmaIcon,
        pasta: pastaIcon,
        "side dishes and extras": sidedishIcon

    }

      // Reset to page 1 whenever filtered menu changes
    useEffect(() => {
        setCurrentPage(1)
    }, [menu])

    const [currentPage, setCurrentPage] = useState(1)
    const rowsperPage = 5
    const totalPage = Math.ceil(menu.length / rowsperPage)
    const startIndex = (currentPage - 1) * rowsperPage
    const currentRows = menu.slice(startIndex, startIndex + rowsperPage)

    return(
        <>
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
                {currentRows.map( meal => (
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
        <div className="pagination">
            <button onClick={ () => setCurrentPage(p => p - 1)}
                disabled={currentPage === 1}>
                    Previous
            </button>
            {Array.from({length: totalPage}, (_, i) => i + 1).map(page => (
                <button key={page} onClick={()=> setCurrentPage(page)} className={currentPage === page ? "active" : ""}>
                    {page}
                </button>
            ))}
            <button onClick={()=> setCurrentPage(p => p + 1)} disabled={currentPage === totalPage}>Next</button>
        </div>
        </>
    )
}

export default MenuTable;