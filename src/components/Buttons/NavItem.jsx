import './NavItem.css'
import Button from './Button'
function NavItem(){
    // const iconString = icon;
    return(
      <nav>
        <Button text={'Dash board'} iconWhite={'./assets/DashboardWhite.svg'} iconGrey={'./assets/Dashboard.svg'} iconSrc={true}/>
        <Button text={'Menu Item'} iconWhite={'./assets/MenuListWhite.svg'} iconGrey={'./assets/MenuListGrey.svg'} iconSrc={true}/>
        <Button text={'Categories'} iconWhite={'./assets/StackWhite.svg'} iconGrey={'./assets/StackGrey.svg'} iconSrc={true}/>
        <Button text={'Orders'} iconGrey={'./assets/Menu.svg'} iconWhite={'./assets/MenuWhite.svg'} iconSrc={true}/>
        <Button text={'Analytics'} iconWhite={'./assets/AnalyticsWhite.svg'} iconGrey={'./assets/AnalyticsGrey.svg'} iconSrc={true}/>
      </nav>
    )
}
export default NavItem