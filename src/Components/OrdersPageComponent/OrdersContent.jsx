import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import "./OrdersContent.css";

const OrdersContent = () => {

    const token = Cookies.get("token");
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        async function GetOrders() {
            const response = await fetch("https://ecomerceapis.runasp.net/api/Order/GetOrders", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`,
                }
            });

            const data = await response.json();
            console.log(data.data);
            setOrders(data.data);
        }
        GetOrders();
    }, []);

    // return (

    //     < div className="orders-container" >
    //         {orders.map((value) => {
    //             return (
    //                 <div className="order-details">
    //                     <div className="orders">
    //                         <img src={`https://ecomerceapis.runasp.net/${value}`} />
    //                         <div className="order-content">
    //                             <div className="product-name">
    //                                 {value.items.map((item) => {
    //                                     item.productName
    //                                 })}
    //                             </div>
    //                             <div className="product-quantity">Laptop</div>
    //                             <div className="product-price">22000</div>
    //                         </div>
    //                         <div className="date">
    //                             <p>Date:</p>
    //                             <p>2025-02-22T10:28:05.302005</p>
    //                         </div>
    //                     </div>
    //                 </div>
    //             )
    //         })}
    //     </div >
    // )

    return (
        <div className="orders-container">
            {orders.map((order) => (
                <div className="order-details" key={order.orderId}>
                    <div className="orders">
                        <img
                            src={`https://ecomerceapis.runasp.net${order.items[0]?.productImagePath}`}
                            alt={order.items[0]?.productName || "Product Image"}
                        />

                        <div className="order-content">
                            {/* تمام آئٹمز کے نام دکھائیں */}
                            <div className="product-name">
                                {order.items.map((item) => (
                                    <div key={item.id}>
                                        {item.productName}
                                    </div>
                                ))}
                            </div>

                            <div className="product-price">
                                {order.totalAmount}
                            </div>
                        </div>

                        <div className="date">
                            <p>Date:</p>
                            <p>{new Date(order.orderDate).toLocaleDateString()}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default OrdersContent