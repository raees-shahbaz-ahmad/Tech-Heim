import React, { useEffect, useState } from 'react';
import { getUserProfile } from '../../Apis/UserProfile';
import Cookies from 'js-cookie';
import "./OrdersContent.css";

const OrdersContent = () => {

    const [profileContent, setProfileContent] = useState(null);

    useEffect(() => {
        async function fetchData() {
            const data = await getUserProfile();
            console.log(data);
            setProfileContent(data);
        }

        fetchData();
    }, []);

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
            setOrders(data.data);
        }
        GetOrders();
    }, []);

    return (
        <>
            <div className="orders-container">
                <div className="heading">Order History</div>
                <div className="para">Track, return or purchase items</div>

                {orders.map((order) => (
                    <>
                        {console.log(order)}
                        <div className="history-content">
                            <div className="headings">
                                <div className="heading">Product Name</div>
                                <div className="value">{order.items[0].productName}</div>
                            </div>
                            <div className="headings">
                                <div className="heading">Placed on</div>
                                <div className="value">{order.orderDate}</div>
                            </div>
                            <div className="headings">
                                <div className="heading">Total</div>
                                <div className="value">${order.totalAmount}</div>
                            </div>
                            <div className="headings">
                                <div className="heading">Delivered</div>
                                <div className="value">2023/08/22</div>
                            </div>
                            <div className="headings">
                                <div className="heading">Sent to</div>
                                <div className="value">{profileContent.data.fullName}</div>
                            </div>
                        </div>

                        <div className="history-content-images" >
                            <img src={`https://ecomerceapis.runasp.net/${order.items[0].productImagePath}`} />
                        </div>
                    </>
                ))}
            </div >
        </>
    )
}

export default OrdersContent;