import React from "react";
import "../styles/TestimonialCard.css"

const Testimonial = ({opinion}) => {
    const {rating, name, reviewText} = opinion;

    return (
        <div className="testimonial-container">
            <div className="testimonial-content">
                <h3>{rating}</h3>
                <h4>{name}</h4>
                <p>{reviewText}</p>
            </div>
        </div>
    );
};

export default Testimonial;