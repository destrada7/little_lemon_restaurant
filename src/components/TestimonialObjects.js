import React from "react";
import Testimonial from "./TestimonialCard";
import "../styles/Testimonials.css"

const TestimonialOpinions = () => {
    const opinions = [
        {
            rating: 'Excellent',
            name: 'Peter Sykes',
            reviewText: 'One of the best restaurants you can find'
        },
        {
            rating: 'Outstanding',
            name: 'Alice Chapman',
            reviewText: 'The services at the restaurant were exceptional'
        },
        {
            rating: 'Magnificent',
            name: 'Sean Roberts',
            reviewText: 'A delightful experience that I would happily repeat'
        }
    ];


    return (
        <div className="testimonials-flex">
            {opinions.map((opinion, index) => (
                <Testimonial key={index} opinion={opinion} />
            ))}
        </div>
    );
};

export default TestimonialOpinions;