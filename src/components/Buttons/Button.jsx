import React from "react";
import "./button.css";

const Button = ({ text, onClick}) => {
    return (
        <button className="button" onClick={onClick}>
            <img src="#" alt="add" />
            {text}
        </button>
    );
}
export default Button;