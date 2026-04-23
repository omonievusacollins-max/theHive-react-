import './NavItem.css'
function NavItem({text, src}){
    // const iconString = icon;
    return(
        <div className="navItemContainer">
            <img src={src} alt="" className="itemIcon"/>
            <p className="itemText">{text}</p>
        </div>
    )
}
export default NavItem