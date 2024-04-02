"use client"

import { useEffect, useState } from 'react'; // Make sure to import useEffect
import { useRouter } from 'next/navigation';
import { useUserAuth } from '../_utils/auth-context';
import ShoppingList from './shopping-list';
import { getItems, addItem} from '../_services/shopping-list-service'

const Page = () => {
    const { user } = useUserAuth();
    const [items, setItems] = useState([]);

    const loadItems = async () => {
        try {
            if (user){
                const Fetcheditems =  await getItems(user.uid);
                setItems(Fetcheditems);
            } 
        } catch (error) {
            console.error("Error loading items: ", error);
            return [];
        }
    }
    
    const handleAddItem = async (item) => {
        try {
            await addItem(user.uid, item);
            await loadItems();
        } catch (error) {
            console.error("Error adding item: ", error);
        }
    };

    useEffect(() => {
        loadItems();
    }, [user]);

    return (
        <ShoppingList items = {items} add={handleAddItem} setItems={setItems}/>
    );
};

export default Page;
