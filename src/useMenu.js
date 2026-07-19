import { useState, useEffect } from 'react';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from './firebase';

function useMenu() {
    const [menuItems, setMenuItems] = useState([]);

    useEffect(() => {
        const unsubscribe = onSnapshot(collection(db, "menu"), (snapshot) => {
            const items = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setMenuItems(items);
        });
        return () => unsubscribe();
    }, []);

    const menu = menuItems.reduce((acc, item) => {
        if (!acc[item.category]) acc[item.category] = [];
        acc[item.category].push(item);
        return acc;
    }, {});

    return menu;
}

export default useMenu;