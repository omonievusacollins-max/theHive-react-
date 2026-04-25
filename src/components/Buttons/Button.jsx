import React from "react";
import "./button.css";

const Button = ({ text, onClick, altText }) => {
    return (
        <button className="button" onClick={onClick}>
            <img src="#" alt={altText} />
            {text}
        </button>
    );
}
export default Button;