import Item from './item.js';
import { itemList } from './item-list.js';

export default function Home() {
    return (
        <main className="h-screen bg-black  text-white overflow-y-auto">
            <h1 className="text-3xl">Shopping List</h1>
            {itemList.map((item, index) => (
                <Item
                    key={index}
                    name={item.name}
                    quantity={item.quantity}
                    category={item.category}
                />
            )
            )}
        </main>
    );
}
