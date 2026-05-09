import React from "react";
import "./button.css";
import { useState } from "react";

const Button = ({ text, onClick, iconWhite, iconGrey, enableHover=true, iconSrc}) => {
    const [hovered, setHovered] = useState(false)
    const isHovered = enableHover && hovered;
    return (
        <button className={`button ${!enableHover ? 'hoverDisabled' : ''}`} onClick={onClick}
        onMouseEnter={() => enableHover && setHovered(true)} onMouseLeave={() => enableHover && setHovered(false)}
        style={{background: hovered ? 'var(--primary-color)' : 'var(--secondary-color)', color: hovered ? 'white' : 'var(--grey)'}}>
            {iconSrc &&<img src={isHovered ? iconWhite : iconGrey} alt="" />}
            {text}
        </button>
    );
}
export default Button

// Add className hoverDisabled when enableHover is false and remove hover styles from css