// Page.js
"use client";

import { useState } from 'react';
import { useEffect } from 'react';
import MealIdeas from "./meal-ideas"; // Make sure this path matches the file name
import NewItem from "./new-item"; // Adjust as per your actual file names
import ItemList from "./item-list"; // Adjust as per your actual file names


const ShoppingList = (props) => {
    const [ingredient, setIngredient] = useState(null);

    const addItem = (item) => {
        props.add(item);
    };

    const handleIngredientClick = (ingredient) => {
        const emojiRegex = /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;

        const cleanedIngredient = ingredient.split(',')[0].replace(emojiRegex, '').trim();
        setIngredient((i) => i = cleanedIngredient);
        console.log(cleanedIngredient);
    };

    return (
        <main className=' min-h-screen p-1 bg-black text-white'>
            <div className="flex">
                <div className="p-2 w-[40%]">
                    <h1 className='text-3xl'>Shopping List</h1>
                    <NewItem onAddItem={addItem} />
                    <ItemList handleIngredientClick={handleIngredientClick} items={props.items} setItems={props.setItems} />
                </div>
                <div className="mt-10">
                    <h1 className='text-2xl'>Meal Ideas</h1>
                    {ingredient? <MealIdeas ingredient={ingredient} /> : <p>Click an ingredient to see meal ideas</p>}
                </div>
            </div>
        </main>
    );
};

export default ShoppingList;
