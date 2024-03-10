"use client";

import Item from './item'
import { useState } from 'react'
import { useEffect } from 'react'


const ItemList = (props) => {
    const [sortBy, setSortBy] = useState('name');
    const items = props.items;
    const handleSortName = () => {
        setSortBy('name');
    }

    const handleSortCategory = () => {
        setSortBy('Category');
    }

    useEffect(() => {
        if (sortBy == 'name') {
            props.setItems(I => ([...I].sort((a, b) => a.name.localeCompare(b.name))));
        } else if (sortBy == 'Category') {
            props.setItems(I => ([...I].sort((a,b) => a.category.localeCompare(b.category))));
        }
    }, [sortBy])

    return (
        <div>
            <div className='flex gap-5 my-3 px-1'>
                <p className=' align-middle '>Sort by:</p>
                <button className={sortBy=="name"? 'bg-orange-700 rounded-sm p-1' : 'bg-orange-500 rounded-sm p-1'} onClick={handleSortName}> Name </button>
                <button className={sortBy=="Category"? 'bg-orange-700 rounded-sm p-1' : 'bg-orange-500 rounded-sm p-1'} onClick={handleSortCategory}> Category </button>
            </div>
            {items.map((item, index) => {
                return <Item handleClick={props.handleIngredientClick} key={index} name={item.name} quantity={item.quantity} category={item.category} />
            })}
        </div>
  )
}

export default ItemList