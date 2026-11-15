import { useState, useEffect } from 'react';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '../services/firebase.js';

function useExtras() {
    const [extraItems, setExtraItems] = useState([]);

    useEffect(() => {
        const unsubscribe = onSnapshot(collection(db, "Extras"), (snapshot) => {
            const items = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
              .filter(extra => extra.available === true);
            setExtraItems(items);
        });
        return () => unsubscribe();
    }, []);

    const extras = extraItems.reduce((acc, item) => {
        if (!acc[item.category]) acc[item.category] = [];
        acc[item.category].push(item);
        return acc;
    }, {});
    return extras;

}

export default useExtras;