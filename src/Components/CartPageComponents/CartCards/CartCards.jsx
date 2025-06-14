import React, { useEffect, useState } from 'react';
import { getUserCart } from '../../../Apis/getUserCart';
import { deleteCart } from '../../../Apis/deleteCartItem';
import { showToast } from '../../Toast';
import { useNavigate } from 'react-router';
import Cookies from 'js-cookie';
import "./CartCards.css";

const CartCards = () => {
    const [carts, setCarts] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const navigate = useNavigate();

    const [quantity, setQuantity] = useState(() => {
        const savedQuantities = Cookies.get('cartQuantities');
        return savedQuantities ? JSON.parse(savedQuantities) : {};
    });

    useEffect(() => {
        Cookies.set('cartQuantities', JSON.stringify(quantity), { expires: 7 });
        calculateTotalPrice();
    }, [quantity]);

    useEffect(() => {
        async function fetchCarts() {
            try {
                const response = await getUserCart();
                const data = Array.isArray(response) ? response : response?.data || [];
                setCarts(data);

                const newQuantities = { ...quantity };
                let needsUpdate = false;

                data.forEach(item => {
                    if (!(item.id in newQuantities)) {
                        newQuantities[item.id] = 1;
                        needsUpdate = true;
                    }
                });

                if (needsUpdate) {
                    setQuantity(newQuantities);
                }

                calculateTotalPrice();
            } catch (error) {
                console.error("Unable to get Carts", error);
            }
        }
        fetchCarts();
    }, []);

    useEffect(() => {
        calculateTotalPrice();
    }, [carts]);

    const calculateTotalPrice = () => {
        let total = 0;
        carts.forEach(item => {
            const itemPrice = item.discountedPrice > 0 ?
                item.discountedPrice : item.originalPrice;
            total += itemPrice * (quantity[item.id] || 1);
        });
        setTotalPrice(total);
    };

    const handleIncreaseQuantity = (id) => {
        setQuantity(prev => ({
            ...prev,
            [id]: (prev[id] || 0) + 1
        }));
    }

    const handledecreaseQuantity = (id) => {
        setQuantity(prev => ({
            ...prev,
            [id]: prev[id] > 1 ? prev[id] - 1 : 1
        }));
    }

    const handleDelete = async (id) => {
        try {
            const result = await deleteCart(id);
            setCarts(prev => prev.filter(item => item.id !== id));

            setQuantity(prev => {
                const newQuantities = { ...prev };
                delete newQuantities[id];
                return newQuantities;
            });

            if (result.status === 200) {
                showToast("Cart Deleted Sucessfully!", "green");
            } else {
                showToast("Failed to Delete to cart!", "red");
            }
        } catch (error) {
            console.error("Delete Failed", error);
            showToast("Something went wrong while deleting!", "red");
        }
    }

    const handleCheckoutPage = () => {
        navigate("/checkout");
    }

    return (
        <>
            <div className='cart-cards-payment-container'>
                <div className="cart-cards-container-2">
                    {carts.map((value) => {
                        const itemPrice = value.discountedPrice > 0 ?
                            value.discountedPrice : value.originalPrice;
                        const itemTotal = itemPrice * (quantity[value.id] || 1);

                        return (
                            <div className="cart-product-2" key={value.id}>
                                <img src={`https://ecomerceapis.runasp.net/${value.productImages}`} alt={value.productName} />
                                <div className="cart-product-content">
                                    <p className="product-name">{value.productName}</p>
                                    <p className="product-color">Black</p>
                                    <p className="product-quantity">x{quantity[value.id] || 1}</p>

                                    <div className="delivery-content">
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="currentcolor"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M8.66634 9.83325H1.33301C1.05967 9.83325 0.833008 9.60659 0.833008 9.33325V3.99992C0.833008 2.25325 2.25301 0.833252 3.99967 0.833252H9.99967C10.273 0.833252 10.4997 1.05992 10.4997 1.33325V7.99992C10.4997 9.01325 9.67968 9.83325 8.66634 9.83325ZM1.83301 8.83325H8.66634C9.12634 8.83325 9.49967 8.45992 9.49967 7.99992V1.83325H3.99967C2.80634 1.83325 1.83301 2.80659 1.83301 3.99992V8.83325Z"
                                                fill="#0C68F4" />
                                            <path
                                                d="M12.6663 13.8333H11.9997C11.7263 13.8333 11.4997 13.6066 11.4997 13.3333C11.4997 12.8733 11.1263 12.4999 10.6663 12.4999C10.2063 12.4999 9.83301 12.8733 9.83301 13.3333C9.83301 13.6066 9.60634 13.8333 9.33301 13.8333H6.66634C6.39301 13.8333 6.16634 13.6066 6.16634 13.3333C6.16634 12.8733 5.79301 12.4999 5.33301 12.4999C4.87301 12.4999 4.49967 12.8733 4.49967 13.3333C4.49967 13.6066 4.27301 13.8333 3.99967 13.8333H3.33301C1.95301 13.8333 0.833008 12.7133 0.833008 11.3333V9.33325C0.833008 9.05992 1.05967 8.83325 1.33301 8.83325H8.66634C9.12634 8.83325 9.49967 8.45992 9.49967 7.99992V3.33325C9.49967 3.05992 9.72634 2.83325 9.99967 2.83325H11.2263C11.8863 2.83325 12.493 3.1866 12.8197 3.75993L13.9597 5.75326C14.0463 5.90659 14.0463 6.09992 13.9597 6.25326C13.873 6.40659 13.7063 6.49992 13.5263 6.49992H12.6663C12.573 6.49992 12.4997 6.57325 12.4997 6.66659V8.66659C12.4997 8.75992 12.573 8.83325 12.6663 8.83325H14.6663C14.9397 8.83325 15.1663 9.05992 15.1663 9.33325V11.3333C15.1663 12.7133 14.0463 13.8333 12.6663 13.8333ZM12.433 12.8333H12.6663C13.493 12.8333 14.1663 12.1599 14.1663 11.3333V9.83325H12.6663C12.0263 9.83325 11.4997 9.30659 11.4997 8.66659V6.66659C11.4997 6.02659 12.0197 5.49992 12.6663 5.49992L11.953 4.25326C11.8063 3.99326 11.5263 3.83325 11.2263 3.83325H10.4997V7.99992C10.4997 9.01325 9.67968 9.83325 8.66634 9.83325H1.83301V11.3333C1.83301 12.1599 2.50634 12.8333 3.33301 12.8333H3.56635C3.78635 12.0666 4.49301 11.4999 5.33301 11.4999C6.17301 11.4999 6.87967 12.0666 7.09967 12.8333H8.90633C9.12633 12.0666 9.83301 11.4999 10.673 11.4999C11.513 11.4999 12.213 12.0666 12.433 12.8333Z"
                                                fill="#0C68F4" />
                                            <path
                                                d="M5.33333 15.1667C4.32 15.1667 3.5 14.3467 3.5 13.3333C3.5 12.32 4.32 11.5 5.33333 11.5C6.34667 11.5 7.16667 12.32 7.16667 13.3333C7.16667 14.3467 6.34667 15.1667 5.33333 15.1667ZM5.33333 12.5C4.87333 12.5 4.5 12.8733 4.5 13.3333C4.5 13.7933 4.87333 14.1667 5.33333 14.1667C5.79333 14.1667 6.16667 13.7933 6.16667 13.3333C6.16667 12.8733 5.79333 12.5 5.33333 12.5Z"
                                                fill="#0C68F4" />
                                            <path
                                                d="M10.6663 15.1667C9.65301 15.1667 8.83301 14.3467 8.83301 13.3333C8.83301 12.32 9.65301 11.5 10.6663 11.5C11.6797 11.5 12.4997 12.32 12.4997 13.3333C12.4997 14.3467 11.6797 15.1667 10.6663 15.1667ZM10.6663 12.5C10.2063 12.5 9.83301 12.8733 9.83301 13.3333C9.83301 13.7933 10.2063 14.1667 10.6663 14.1667C11.1263 14.1667 11.4997 13.7933 11.4997 13.3333C11.4997 12.8733 11.1263 12.5 10.6663 12.5Z"
                                                fill="#0C68F4" />
                                            <path
                                                d="M14.6667 9.83333H12.6667C12.0267 9.83333 11.5 9.30667 11.5 8.66667V6.66667C11.5 6.02667 12.0267 5.5 12.6667 5.5H13.5267C13.7067 5.5 13.8733 5.59334 13.96 5.75334L15.1 7.75334C15.14 7.82667 15.1667 7.91333 15.1667 8V9.33333C15.1667 9.60667 14.94 9.83333 14.6667 9.83333ZM12.6667 6.5C12.5733 6.5 12.5 6.57333 12.5 6.66667V8.66667C12.5 8.76 12.5733 8.83333 12.6667 8.83333H14.1667V8.13334L13.2333 6.5H12.6667Z"
                                                fill="#0C68F4" />
                                        </svg>
                                        <p>Free Delivery</p>
                                    </div>

                                    <div className="delivery-content">
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="currentcolor"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M7.1937 10.1134C7.06036 10.1134 6.9337 10.06 6.84036 9.96669L5.22703 8.35335C5.0337 8.16002 5.0337 7.84002 5.22703 7.64669C5.42036 7.45335 5.74036 7.45335 5.9337 7.64669L7.1937 8.90669L10.0604 6.04002C10.2537 5.84669 10.5737 5.84669 10.767 6.04002C10.9604 6.23335 10.9604 6.55335 10.767 6.74669L7.54703 9.96669C7.4537 10.06 7.32703 10.1134 7.1937 10.1134Z"
                                                fill="#0C68F4" />
                                            <path
                                                d="M8.00025 15.1666C7.58025 15.1666 7.16025 15.0266 6.83358 14.7466L5.78025 13.8399C5.67358 13.7466 5.40691 13.6533 5.26691 13.6533H4.12025C3.13358 13.6533 2.33358 12.8533 2.33358 11.8666V10.7266C2.33358 10.5866 2.24025 10.3266 2.14691 10.2199L1.24691 9.15992C0.700247 8.51325 0.700247 7.49325 1.24691 6.84659L2.14691 5.78659C2.24025 5.67992 2.33358 5.41992 2.33358 5.27992V4.13325C2.33358 3.14659 3.13358 2.34659 4.12025 2.34659H5.27358C5.41358 2.34659 5.68025 2.24659 5.78691 2.15992L6.84025 1.25325C7.49358 0.693252 8.51358 0.693252 9.16691 1.25325L10.2202 2.15992C10.3269 2.25325 10.5936 2.34659 10.7336 2.34659H11.8669C12.8536 2.34659 13.6536 3.14659 13.6536 4.13325V5.26659C13.6536 5.40659 13.7536 5.67325 13.8469 5.77992L14.7536 6.83325C15.3136 7.48659 15.3136 8.50659 14.7536 9.15992L13.8469 10.2133C13.7536 10.3199 13.6536 10.5866 13.6536 10.7266V11.8599C13.6536 12.8466 12.8536 13.6466 11.8669 13.6466H10.7336C10.5936 13.6466 10.3269 13.7466 10.2202 13.8333L9.16691 14.7399C8.84025 15.0266 8.42025 15.1666 8.00025 15.1666ZM4.12025 3.34659C3.68691 3.34659 3.33358 3.69992 3.33358 4.13325V5.27325C3.33358 5.65325 3.15358 6.13992 2.90691 6.42659L2.00691 7.48659C1.77358 7.75992 1.77358 8.23325 2.00691 8.50659L2.90691 9.56659C3.15358 9.85992 3.33358 10.3399 3.33358 10.7199V11.8599C3.33358 12.2933 3.68691 12.6466 4.12025 12.6466H5.27358C5.66025 12.6466 6.14691 12.8266 6.44025 13.0799L7.49358 13.9866C7.76691 14.2199 8.24691 14.2199 8.52025 13.9866L9.57358 13.0799C9.86691 12.8333 10.3536 12.6466 10.7402 12.6466H11.8736C12.3069 12.6466 12.6602 12.2933 12.6602 11.8599V10.7266C12.6602 10.3399 12.8402 9.85325 13.0936 9.55992L14.0002 8.50659C14.2336 8.23325 14.2336 7.75325 14.0002 7.47992L13.0936 6.42659C12.8402 6.13325 12.6602 5.64659 12.6602 5.25992V4.13325C12.6602 3.69992 12.3069 3.34659 11.8736 3.34659H10.7402C10.3536 3.34659 9.86691 3.16659 9.57358 2.91325L8.52025 2.00659C8.24691 1.77325 7.76691 1.77325 7.49358 2.00659L6.44025 2.91992C6.14691 3.16659 5.65358 3.34659 5.27358 3.34659H4.12025Z"
                                                fill="#0C68F4" />
                                        </svg>
                                        <p>Guaranteed</p>
                                    </div>

                                    <div className="price-content">
                                        <div className="price">${itemTotal.toFixed(2)}</div>
                                        <div className="delete-content">
                                            <svg onClick={() => handleDelete(value.id)} width="16" height="16" viewBox="0 0 16 16" fill="currentcolor"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M14.0004 4.48657C13.9871 4.48657 13.9671 4.48657 13.9471 4.48657C10.4204 4.13324 6.90043 3.9999 3.41377 4.35324L2.05377 4.48657C1.77377 4.51324 1.5271 4.31324 1.50043 4.03324C1.47377 3.75324 1.67377 3.51324 1.9471 3.48657L3.3071 3.35324C6.85377 2.99324 10.4471 3.13324 14.0471 3.48657C14.3204 3.51324 14.5204 3.7599 14.4938 4.03324C14.4738 4.29324 14.2538 4.48657 14.0004 4.48657Z"
                                                    fill="#C91433" />
                                                <path
                                                    d="M5.66651 3.81325C5.63984 3.81325 5.61318 3.81325 5.57984 3.80659C5.31318 3.75992 5.12651 3.49992 5.17318 3.23325L5.31984 2.35992C5.42651 1.71992 5.57318 0.833252 7.12651 0.833252H8.87318C10.4332 0.833252 10.5798 1.75325 10.6798 2.36659L10.8265 3.23325C10.8732 3.50659 10.6865 3.76659 10.4198 3.80659C10.1465 3.85325 9.88651 3.66659 9.84651 3.39992L9.69984 2.53325C9.60651 1.95325 9.58651 1.83992 8.87984 1.83992H7.13318C6.42651 1.83992 6.41318 1.93325 6.31318 2.52659L6.15984 3.39325C6.11984 3.63992 5.90651 3.81325 5.66651 3.81325Z"
                                                    fill="#C91433" />
                                                <path
                                                    d="M10.1396 15.1667H5.85961C3.53294 15.1667 3.43961 13.8801 3.36627 12.8401L2.93294 6.12672C2.91294 5.85338 3.12627 5.61338 3.39961 5.59338C3.67961 5.58005 3.91294 5.78672 3.93294 6.06005L4.36627 12.7734C4.43961 13.7867 4.46627 14.1667 5.85961 14.1667H10.1396C11.5396 14.1667 11.5663 13.7867 11.6329 12.7734L12.0663 6.06005C12.0863 5.78672 12.3263 5.58005 12.5996 5.59338C12.8729 5.61338 13.0863 5.84672 13.0663 6.12672L12.6329 12.8401C12.5596 13.8801 12.4663 15.1667 10.1396 15.1667Z"
                                                    fill="#C91433" />
                                                <path
                                                    d="M9.10672 11.5H6.88672C6.61339 11.5 6.38672 11.2733 6.38672 11C6.38672 10.7267 6.61339 10.5 6.88672 10.5H9.10672C9.38005 10.5 9.60672 10.7267 9.60672 11C9.60672 11.2733 9.38005 11.5 9.10672 11.5Z"
                                                    fill="#C91433" />
                                                <path
                                                    d="M9.66634 8.83325H6.33301C6.05967 8.83325 5.83301 8.60658 5.83301 8.33325C5.83301 8.05992 6.05967 7.83325 6.33301 7.83325H9.66634C9.93967 7.83325 10.1663 8.05992 10.1663 8.33325C10.1663 8.60658 9.93967 8.83325 9.66634 8.83325Z"
                                                    fill="#C91433" />
                                            </svg>
                                            <span className='increase-decrease' onClick={() => handledecreaseQuantity(value.id)}>-</span>
                                            <span>{quantity[value.id] || 1}</span>
                                            <span className='increase-decrease' onClick={() => handleIncreaseQuantity(value.id)}>+</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>

                <div className="payment-details">
                    <div className="heading">Payment Details</div>
                    <div className="subtotal-content">
                        <div className="subtotal">Subtotal</div>
                        <div className="price">${totalPrice.toFixed(2)}</div>
                    </div>

                    <div className="subtotal-content">
                        <div className="subtotal">Discount</div>
                        <div className="price">-$0.00</div>
                    </div>

                    <div className="subtotal-content">
                        <div className="subtotal">Shipment cost</div>
                        <div className="price">$0.00</div>
                    </div>
                    <div className="sepration1" style={{ border: "1px solid lightgrey", margin: "10px 0" }}></div>
                    <div className="subtotal-content">
                        <div className="grandtotal">Grand Total</div>
                        <div className="grandprice">${totalPrice.toFixed(2)}</div>
                    </div>

                    <button onClick={handleCheckoutPage} className="cart-btn-2">Proceed to Checkout</button>
                </div>
            </div>
        </>
    )
}

export default CartCards;