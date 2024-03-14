import React from "react";
import Card from "./SpecialsCard";
import "../styles/Specials.css"
import Bruschetta from "../images/bruschetta.svg";
import GreekSalad from "../images/greek_salad.jpg";
import LemonDessert from "../images/lemon_dessert.jpg";

const SpecialDishes = () => {
    const dishes = [
        {
            name: 'Greek Salad',
            image: GreekSalad,
            price: '$12.99',
            description: 'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.'
        },
        {
            name: 'Bruschetta',
            image: Bruschetta,
            price: '$5.99',
            description: 'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.'
        },
        {
            name: 'Lemon Dessert',
            image: LemonDessert,
            price: '$5.00',
            description: 'Refreshing lemon-flavored dessert with a light and fluffy texture.'
        }
    ];

    return (
        <div className="special-dishes special-dishes-flex">
            {dishes.map((dish, index) => (
                <Card key={index} dish={dish} />
            ))}
        </div>
    );
};

export default SpecialDishes;