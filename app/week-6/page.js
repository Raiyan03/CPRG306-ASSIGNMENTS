"use client"

import ItemList from "./item-list"
import NewItem from "./new-item"
import itemsData from './items.json'
import { useState } from 'react'

const page = () => {
    const [items, setItems] = useState(itemsData);

    const addItem = (item) => {
        setItems([...items, item]);
    }

    return (
    <main className=' min-h-screen p-1  bg-black text-white'>
        <h1 className='text-3xl'>Shopping List</h1>
        <NewItem onAddItem={addItem}/>
        <ItemList items={items} setItems={setItems}/>
    </main>
  )
}

export default page
