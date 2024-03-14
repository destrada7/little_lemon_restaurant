import React from "react";
import SpecialDishes from "./SpecialsObjects";
import "../styles/Specials.css";

const Specials = () => {
    return(
        <div className="specials-container">
            <div className="specials-section">
                <h2 className="specials-title">¡This Week's Specials!</h2>
                <div className="bar"></div>
                <div className="specials-wrapper">
                    <SpecialDishes />
                </div>
            </div>
        </div>
    );
};

export default Specials;