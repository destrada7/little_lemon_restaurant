import React from "react";
import "../styles/Prefooter.css"
import Chef from "../images/alternative_chef.jpg"

const Prefooter = () => {
    return(
        <div className="prefooter-section">
            <div className="prefooter-text-wrapper">
                <div className="titles_prefooter">
                    <h2>Little Lemon</h2>
                    <h3>About Us</h3>
                </div>
                <div className="prefooter-description">
                    <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. </p>
                </div>
            </div>
            <div className="prefooter-img">
                <img src={Chef} alt="Chefs" />
            </div>
    </div>
    );
};

export default Prefooter;