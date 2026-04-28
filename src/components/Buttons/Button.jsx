import React from "react";
import "./button.css";
import { useState } from "react";

const Button = ({ text, onClick, iconWhite, iconGrey }) => {
    const [hovered, setHovered] = useState(false)

    return (
        <button className="button" onClick={onClick}
        onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
        style={{background: hovered ? 'var(--primary-color)' : 'var(--secondary-color)', color: hovered ? 'white' : 'var(--grey)'}}>
            {/* {iconSrc && <img src={iconSrc} alt={altText} fill='white' />} */}
            <img src={hovered ? iconWhite : iconGrey} alt="" />
            {text}
        </button>
    );
}
export default Button