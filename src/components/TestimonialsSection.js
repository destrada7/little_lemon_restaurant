import React from "react";
import TestimonialOpinions from "./TestimonialObjects";
import "../styles/Testimonials.css";

const Testimonials = () => {
    return(
        <div className="testimonials-container">
            <div className="testimonials-title">
                <h2>Testimonials</h2>
            </div>
            <div className="testimonials-wrapper">
                <TestimonialOpinions />
            </div>
        </div>
    );
};

export default Testimonials;

