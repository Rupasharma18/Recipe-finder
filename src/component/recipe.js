import React from 'react'

const Recipe = ({ title, calories, image, ingredients }) => {
    return (
        <div className="recipe">
            <h3>{title}</h3>
            <ol>
                {ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </ol>
            <p>{calories}</p>
            <img className="image" src={image}  alt="im" />

        </div>
    );
};
export default Recipe;