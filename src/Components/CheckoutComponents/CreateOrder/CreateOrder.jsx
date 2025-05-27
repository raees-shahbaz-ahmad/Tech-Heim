import React, { useState } from "react";
import Cookies from "js-cookie";
import { showToast } from '../../Toast';
import "../CreateOrder/CreateOrder.css";

const CreateOrderAddress = ({ onClose, productIds }) => {

    const [city, setCity] = useState("");
    const [street, setStreet] = useState("");
    const [postalCode, setPostalCode] = useState("");
    const [region, setRegion] = useState("");
    const token = Cookies.get("token");

    const addAddress = async (e) => {
        e.preventDefault();
        const addressObj = { city, street, postalCode, region };

        try {
            const response = await fetch("https://ecomerceapis.runasp.net/api/Address/AddAddress", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`,
                },
                body: JSON.stringify(addressObj),
            });

            const data = await response.json();
            console.log("Address Result:", data);
            if (response.ok) {
                await createOrder(addressObj);
                showToast("Address Added Successfull", "green");
            } else {
                showToast("Failed to add Address", "red");
            }
        } catch (error) {
            console.error("Error adding address:", error);
            showToast("Something went wrong while adding Address!", "red");
        }
    }

    const createOrder = async (address) => {
        const items = productIds.map((productId) => ({
            productId,
            quantity: 1,
            couponId: 0,
        }));

        try {
            const response = await fetch("https://ecomerceapis.runasp.net/api/Order/CreateOrder?coupon=4", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({
                    ...address,
                    items,
                }),
            });

            const result = await response.json();
            console.log("Order Result:", result);

            if (response.ok) {
                showToast("Order Created Successfully", "green");
                onClose?.();
            } else {
                showToast("Failed to Create Order", "red");
            }
        } catch (error) {
            console.error("Error creating order:", error);
        }
    }


    return (
        <div className="address-model">
            <div className="top-content">
                <div className="heading">Address Details</div>
                <svg onClick={onClose} className="address-model-cross" width="30" height="30" viewBox="0 0 40 40" fill="currentcolor"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M20.0007 37.9167C10.1173 37.9167 2.08398 29.8834 2.08398 20C2.08398 10.1167 10.1173 2.08337 20.0007 2.08337C29.884 2.08337 37.9173 10.1167 37.9173 20C37.9173 29.8834 29.884 37.9167 20.0007 37.9167ZM20.0007 4.58337C11.5007 4.58337 4.58398 11.5 4.58398 20C4.58398 28.5 11.5007 35.4167 20.0007 35.4167C28.5007 35.4167 35.4173 28.5 35.4173 20C35.4173 11.5 28.5007 4.58337 20.0007 4.58337Z"
                        fill="#444444" />
                    <path
                        d="M15.2829 25.9666C14.9663 25.9666 14.6496 25.85 14.3996 25.6C13.9163 25.1166 13.9163 24.3166 14.3996 23.8333L23.8329 14.4C24.3163 13.9166 25.1163 13.9166 25.5996 14.4C26.0829 14.8833 26.0829 15.6833 25.5996 16.1666L16.1663 25.6C15.9329 25.85 15.5996 25.9666 15.2829 25.9666Z"
                        fill="#444444" />
                    <path
                        d="M24.7163 25.9666C24.3996 25.9666 24.0829 25.85 23.8329 25.6L14.3996 16.1666C13.9163 15.6833 13.9163 14.8833 14.3996 14.4C14.8829 13.9166 15.6829 13.9166 16.1663 14.4L25.5996 23.8333C26.0829 24.3166 26.0829 25.1166 25.5996 25.6C25.3496 25.85 25.0329 25.9666 24.7163 25.9666Z"
                        fill="#444444" />
                </svg>
            </div>

            <form className="input-field" onSubmit={addAddress}>
                <input
                    className="address-model-city"
                    type="text"
                    placeholder="City"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                />

                <div className="input-field-middle">
                    <input
                        className="address-model-street"
                        type="text"
                        placeholder="Street"
                        value={street}
                        onChange={(e) => setStreet(e.target.value)}
                    />

                    <input
                        className="address-model-postalcode"
                        type="text"
                        placeholder="Postal Code"
                        value={postalCode}
                        onChange={(e) => setPostalCode(e.target.value)}
                    />
                </div>

                <input
                    className="address-model-region"
                    type="text"
                    placeholder="Region"
                    value={region}
                    onChange={(e) => setRegion(e.target.value)}
                />

                <div className="input-field-btns">
                    <button className="address-model-btn">Add Address & Place Order</button>
                </div>
            </form>
        </div >
    )
}

export default CreateOrderAddress;