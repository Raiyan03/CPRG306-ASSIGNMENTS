"use client"
import { useState } from "react"

export default function NewItem(props) {
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("Produce");


    const handleSubmit = (event)=>{
        event.preventDefault();
        let item = {
            name: name,
            quantity: quantity,
            category: category
        }
        props.onAddItem(item);
        console.log(item);
        setName("");
        setQuantity(1);
        setCategory("Produce");
    }
    return (
        <div className="flex-col text-black justify-center items-center mt-2 w-1/3 h-1/4 bg-black-500">
            <form onSubmit={handleSubmit} className="p-1 flex-col h-full justify-bet">
            <input 
            id="name" 
            type="text" 
            className="mt-1 block w-full px-2 py-1.5 border-gray-300 rounded-md shadow-sm" 
            value={name} 
            placeholder="Item name"
            onChange={(e) => setName(e.target.value)} 
            required
          />
          <div className=" mt-2 flex w-full justify-between">
            <input
            id="quantity"
            type="number"
            min="1"
            max="99"
            value={quantity}
            className=" w-1/4 rounded px-2 py-1.5"
            onChange={(e) => {
                setQuantity(e.target.value);
            }}
      
            />
            <select
            id="category"
            className="w-1/4 rounded px-2 py-1.5"
            value={category}
            onChange={(e)=>{
                setCategory(e.target.value)
            }}
            >
                <option value="produce">Produce</option>
                <option value="dairy">Dairy</option>
                <option value="bakery">Bakery</option>
                <option value="meat">Meat</option>
                <option value="frozen">Frozen Foods</option>
                <option value="canned">Canned Goods</option>
                <option value="dry">Dry Goods</option>
                <option value="beverages">Beverages</option>
                <option value="snacks">Snacks</option>
                <option value="household">Household</option>
                <option value="other">Other</option>
            </select>
          </div>
          <button
          type="submit"
          className="mt-1 block w-full px-2 py-1.5 bg-blue-500 rounded hover:bg-blue-800 active:border-solid active:border-white active:border-2"
          >
            +
          </button>
            </form>
        </div>
    )
    
}