// meal-ideas.js
"use client";
import { useState, useEffect } from "react";

const MealIdeas = (props) => {
    const [meals, setMeals] = useState([]);
    const ingredient = props.ingredient;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const mealsData = await fetchMealIdeas(ingredient);
                setMeals(mealsData);
            } catch (error) {
                console.error("Failed to fetch meals:", error);
                // Optionally, set meals to an empty array or handle the error as needed
                setMeals([]);
            }
        };
        fetchData();
    }, [ingredient]);

    return (
        <>
{
    meals ? (
        <>
            <p>Here are some meal ideas for {ingredient}:</p>
            {meals.map((meal) => (
                <div className=" text-white" key={meal.idMeal}>
                    <h2 className=" py-2 my-1 bg-gray-900">{meal.strMeal}</h2>
                </div>
            ))}
        </>
    ) : (
        <p>No meals found for {ingredient}</p>
    )
}

        </>
    );
};

const fetchMealIdeas = async (ingredient) => {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
    const data = await response.json();
    return data.meals;
};

export default MealIdeas;
