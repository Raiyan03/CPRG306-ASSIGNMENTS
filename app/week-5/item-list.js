"use client";

import items from './items.json'
import Item from './Item'
import { useState } from 'react'
import { useEffect } from 'react'

const ItemList = () => {

    const [sortBy, setSortBy] = useState('name');
    const [itemList, setItems] = useState(items);
    
    const handleSortName = () => {
        setSortBy('name');
    }

    const handleSortCategory = () => {
        setSortBy('Category');
    }

    useEffect(() => {
        if (sortBy == 'name') {
            setItems(I => ([...I].sort((a, b) => a.name.localeCompare(b.name))));
        } else if (sortBy == 'Category') {
            setItems(I => ([...I].sort((a,b) => a.category.localeCompare(b.category))));
        }
    }, [sortBy])

    return (
        <div>
            <div className='flex gap-5 my-3'>
                <p className=' align-middle '>Sort by:</p>
                <button className={sortBy=="name"? 'bg-orange-700 rounded-sm p-1' : 'bg-orange-500 rounded-sm p-1'} onClick={handleSortName}> Name </button>
                <button className={sortBy=="Category"? 'bg-orange-700 rounded-sm p-1' : 'bg-orange-500 rounded-sm p-1'} onClick={handleSortCategory}> Category </button>
            </div>
            {itemList.map((item, index) => {
                return <Item key={index} name={item.name} quantity={item.quantity} category={item.category} />
            })}
        </div>
  )
}

export default ItemList
