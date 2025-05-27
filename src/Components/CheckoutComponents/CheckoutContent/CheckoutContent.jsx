import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import CreateOrderAddress from '../CreateOrder/CreateOrder';
import { getUserCart } from '../../../Apis/getUserCart';
import { useSearchParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import "../CheckoutContent/CheckoutContent.css";

const CheckoutContent = () => {

    const [showAddressModel, setShowAddressModel] = useState(false);
    const handleAddressIcon = () => {
        setShowAddressModel(true);
    }

    const closeAddressModel = () => {
        setShowAddressModel(false);
    }

    const [showAddress, setShowAddress] = useState({});
    const token = Cookies.get("token");
    useEffect(() => {
        async function getAddress() {
            const response = await fetch("https://ecomerceapis.runasp.net/api/Address/GetAddresss", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`,
                },
            });

            const data = await response.json();
            console.log(data.data[0]);
            setShowAddress(data.data[0]);
        }

        getAddress();
    }, []);


    const [carts, setCarts] = useState([]);
    const [product, setProduct] = useState(null);
    const [searchParams] = useSearchParams();
    const productUrl = searchParams.get("url");

    useEffect(() => {
        async function fetchCarts() {
            if (productUrl) {
                try {
                    const response = await fetch(`https://ecomerceapis.runasp.net/api/Product/GetProductByURL/url?url=${productUrl}`, {
                        method: "GET",
                        headers: {
                            "Content-Type": "application/json-patch+json",
                        },
                    });

                    const data = await response.json();
                    console.log(data.data);
                    setProduct(data.data);
                } catch (error) {
                    console.error("Unable to fetch product", error);
                }
            }
            else {
                try {
                    const response = await getUserCart();
                    const data = Array.isArray(response) ? response : response?.data || [];
                    setCarts(data);
                } catch (error) {
                    console.error("Unable to get Carts", error);
                }
            }
        }

        fetchCarts();
    }, [productUrl]);

    const navigate = useNavigate();
    const handleOrderBtnClick = () => {
        navigate("/orders");
    }

    return (
        <>
            <div className="checkout-container">
                <div className="user-container">
                    <div className="user-heading">User</div>
                    <div className="edit-content">
                        <div className="sub-edit-content">
                            <p>Raees Shahbaz Ahmad</p>
                        </div>
                        <svg className="name-svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M15 22.75H9C3.57 22.75 1.25 20.43 1.25 15V9C1.25 3.57 3.57 1.25 9 1.25H11C11.41 1.25 11.75 1.59 11.75 2C11.75 2.41 11.41 2.75 11 2.75H9C4.39 2.75 2.75 4.39 2.75 9V15C2.75 19.61 4.39 21.25 9 21.25H15C19.61 21.25 21.25 19.61 21.25 15V13C21.25 12.59 21.59 12.25 22 12.25C22.41 12.25 22.75 12.59 22.75 13V15C22.75 20.43 20.43 22.75 15 22.75Z"
                                fill="#0C68F4" />
                            <path
                                d="M8.49984 17.6901C7.88984 17.6901 7.32984 17.4701 6.91984 17.0701C6.42984 16.5801 6.21984 15.8701 6.32984 15.1201L6.75984 12.1101C6.83984 11.5301 7.21984 10.7801 7.62984 10.3701L15.5098 2.49006C17.4998 0.500059 19.5198 0.500059 21.5098 2.49006C22.5998 3.58006 23.0898 4.69006 22.9898 5.80006C22.8998 6.70006 22.4198 7.58006 21.5098 8.48006L13.6298 16.3601C13.2198 16.7701 12.4698 17.1501 11.8898 17.2301L8.87984 17.6601C8.74984 17.6901 8.61984 17.6901 8.49984 17.6901ZM16.5698 3.55006L8.68984 11.4301C8.49984 11.6201 8.27984 12.0601 8.23984 12.3201L7.80984 15.3301C7.76984 15.6201 7.82984 15.8601 7.97984 16.0101C8.12984 16.1601 8.36984 16.2201 8.65984 16.1801L11.6698 15.7501C11.9298 15.7101 12.3798 15.4901 12.5598 15.3001L20.4398 7.42006C21.0898 6.77006 21.4298 6.19006 21.4798 5.65006C21.5398 5.00006 21.1998 4.31006 20.4398 3.54006C18.8398 1.94006 17.7398 2.39006 16.5698 3.55006Z"
                                fill="#0C68F4" />
                            <path
                                d="M19.8501 9.83003C19.7801 9.83003 19.7101 9.82003 19.6501 9.80003C17.0201 9.06003 14.9301 6.97003 14.1901 4.34003C14.0801 3.94003 14.3101 3.53003 14.7101 3.41003C15.1101 3.30003 15.5201 3.53003 15.6301 3.93003C16.2301 6.06003 17.9201 7.75003 20.0501 8.35003C20.4501 8.46003 20.6801 8.88003 20.5701 9.28003C20.4801 9.62003 20.1801 9.83003 19.8501 9.83003Z"
                                fill="#0C68F4" />
                        </svg>
                    </div>

                    <div className="user-heading">Ship to</div>
                    <div className="edit-content">
                        <div className="sub-edit-content">
                            <p className="address-para">{`${showAddress.street}, ${showAddress.city}, ${showAddress.region}`}</p>
                        </div>
                        <svg onClick={handleAddressIcon} className="address-svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M15 22.75H9C3.57 22.75 1.25 20.43 1.25 15V9C1.25 3.57 3.57 1.25 9 1.25H11C11.41 1.25 11.75 1.59 11.75 2C11.75 2.41 11.41 2.75 11 2.75H9C4.39 2.75 2.75 4.39 2.75 9V15C2.75 19.61 4.39 21.25 9 21.25H15C19.61 21.25 21.25 19.61 21.25 15V13C21.25 12.59 21.59 12.25 22 12.25C22.41 12.25 22.75 12.59 22.75 13V15C22.75 20.43 20.43 22.75 15 22.75Z"
                                fill="#0C68F4" />
                            <path
                                d="M8.49984 17.6901C7.88984 17.6901 7.32984 17.4701 6.91984 17.0701C6.42984 16.5801 6.21984 15.8701 6.32984 15.1201L6.75984 12.1101C6.83984 11.5301 7.21984 10.7801 7.62984 10.3701L15.5098 2.49006C17.4998 0.500059 19.5198 0.500059 21.5098 2.49006C22.5998 3.58006 23.0898 4.69006 22.9898 5.80006C22.8998 6.70006 22.4198 7.58006 21.5098 8.48006L13.6298 16.3601C13.2198 16.7701 12.4698 17.1501 11.8898 17.2301L8.87984 17.6601C8.74984 17.6901 8.61984 17.6901 8.49984 17.6901ZM16.5698 3.55006L8.68984 11.4301C8.49984 11.6201 8.27984 12.0601 8.23984 12.3201L7.80984 15.3301C7.76984 15.6201 7.82984 15.8601 7.97984 16.0101C8.12984 16.1601 8.36984 16.2201 8.65984 16.1801L11.6698 15.7501C11.9298 15.7101 12.3798 15.4901 12.5598 15.3001L20.4398 7.42006C21.0898 6.77006 21.4298 6.19006 21.4798 5.65006C21.5398 5.00006 21.1998 4.31006 20.4398 3.54006C18.8398 1.94006 17.7398 2.39006 16.5698 3.55006Z"
                                fill="#0C68F4" />
                            <path
                                d="M19.8501 9.83003C19.7801 9.83003 19.7101 9.82003 19.6501 9.80003C17.0201 9.06003 14.9301 6.97003 14.1901 4.34003C14.0801 3.94003 14.3101 3.53003 14.7101 3.41003C15.1101 3.30003 15.5201 3.53003 15.6301 3.93003C16.2301 6.06003 17.9201 7.75003 20.0501 8.35003C20.4501 8.46003 20.6801 8.88003 20.5701 9.28003C20.4801 9.62003 20.1801 9.83003 19.8501 9.83003Z"
                                fill="#0C68F4" />
                        </svg>
                    </div>
                </div>

                <div className="left-checkout">
                    <div className="checkout-left-container">
                        <div className="order-container">
                            <div className="order-heading">Your Order</div>

                            <div className="card-content-container" >
                                {carts.map((value) => {
                                    return (
                                        <div className="card-content-2" key={value.id}>
                                            <img src={`https://ecomerceapis.runasp.net/${value.productImages}`} />
                                            <div className="content">
                                                <div className="heading">
                                                    {value.productName}
                                                </div>
                                                <div className="price-content">{value.
                                                    discountedPrice
                                                } <span>Total {value.totalPrice}</span></div>
                                            </div>
                                        </div>
                                    )
                                })}

                                {!product ? (
                                    <p>Loading...</p>
                                ) : (
                                    <div className="card-content-2">
                                        <img src={`https://ecomerceapis.runasp.net/${product.imagePath}`} />
                                        <div className="content">
                                            <div className="heading">
                                                {product.name}
                                            </div>
                                            <div className="price-content"> . <span>Total {product.price}</span></div>
                                        </div>
                                    </div>
                                )}
                            </div>

                            <div className="discount-content">
                                <input type="text" placeholder="Discount Code" />
                                <div className="discount-btn">Apply</div>
                            </div>
                        </div>
                    </div>

                    <div className="payment-details-checkout">
                        <div className="heading">Payment Details</div>
                        <div className="subtotal-content">
                            <div className="subtotal">Subtotal</div>
                            <div className="price">$519.52</div>
                        </div>

                        <div className="subtotal-content">
                            <div className="subtotal">Discount</div>
                            <div className="price">-$111.87</div>
                        </div>

                        <div className="subtotal-content">
                            <div className="subtotal">Shipment cost</div>
                            <div className="price">$22.50</div>
                        </div>
                        <div className="sepration1" style={{ border: " 1px solid lightgrey", margin: "10px 0" }}></div>
                        <div className="subtotal-content">
                            <div className="grandtotal">Grand Total</div>
                            <div className="grandprice">$543.02</div>
                        </div>

                        <button onClick={handleOrderBtnClick} className="cart-btn">Proceed to Order</button>
                    </div>
                </div>
            </div>

            {showAddressModel && (
                <div className="modal-backdrop">
                    <div className="modal">
                        <button onClick={closeAddressModel}>X</button>
                        <CreateOrderAddress
                            onClose={closeAddressModel}
                            productIds={
                                productUrl && product ? [product.id] : carts.map(item => item.productId)
                            }
                        />
                    </div>
                </div>
            )}
        </>
    )
}

export default CheckoutContent;