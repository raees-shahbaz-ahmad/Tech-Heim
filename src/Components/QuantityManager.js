import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';

export const useQuantityManager = (items = []) => {
    const [quantity, setQuantity] = useState(() => {
        const savedQuantities = Cookies.get('cartQuantities');
        return savedQuantities ? JSON.parse(savedQuantities) : {};
    });

    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        Cookies.set('cartQuantities', JSON.stringify(quantity), { expires: 7 });
        calculateTotalPrice(items);
    }, [quantity, items]);

    const calculateTotalPrice = (carts) => {
        let total = 0;
        carts.forEach(item => {
            const itemPrice = item.discountedPrice > 0 ? item.discountedPrice : item.originalPrice;
            total += itemPrice * (quantity[item.id] || 1);
        });
        setTotalPrice(total);
    };

    const initializeQuantities = (items) => {
        const newQuantities = { ...quantity };
        let needsUpdate = false;

        items.forEach(item => {
            if (!(item.id in newQuantities)) {
                newQuantities[item.id] = 1;
                needsUpdate = true;
            }
        });

        if (needsUpdate) setQuantity(newQuantities);
    };

    const handleIncreaseQuantity = (id) => {
        setQuantity(prev => ({
            ...prev,
            [id]: (prev[id] || 0) + 1
        }));
    };

    const handleDecreaseQuantity = (id) => {
        setQuantity(prev => ({
            ...prev,
            [id]: prev[id] > 1 ? prev[id] - 1 : 1
        }));
    };

    const removeQuantity = (id) => {
        setQuantity(prev => {
            const newQuantities = { ...prev };
            delete newQuantities[id];
            return newQuantities;
        });
    };

    return {
        quantity,
        totalPrice,
        setQuantity,
        handleIncreaseQuantity,
        handleDecreaseQuantity,
        removeQuantity,
        initializeQuantities,
    };
};