import './NavItem.css'
import Button from './Button'
function NavItem(){
    // const iconString = icon;
    return(
      <nav>
        <Button text={'Dash board'} iconWhite={'./assets/DashboardWhite.svg'} iconGrey={'./assets/Dashboard.svg'}/>
        <Button text={'Menu Item'} iconSrc={'./assets/MenuList.svg'}/>
        <Button text={'Categories'} iconSrc={'./assets/stacks.svg'}/>
        <Button text={'Orders'} iconSrc={'./assets/Menu.svg'}/>
        <Button text={'Analytics'} iconSrc={'./assets/Analytics.svg'}/>
      </nav>
    )
}
export default NavItem