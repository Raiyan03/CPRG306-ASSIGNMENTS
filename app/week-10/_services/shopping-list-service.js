import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, deleteDoc, query, getFirestore} from "firebase/firestore";

const getItems = async (userId) => {

    const itemRef = collection(db, `users/${userId}/items`);
    const itemsQuery = query(itemRef);

    const querySnapshot = await getDocs(itemsQuery);
    const items = [];

    querySnapshot.forEach((doc) => {
        items.push({
            id : doc.id,
            ...doc.data()
        });
    });
    return items;
}


const addItem = async (userId, item) => {
    const itemRef = collection(db, `users/${userId}/items`);

    const docRef = await addDoc(itemRef, item);

    return docRef.id;
}

export { getItems, addItem };