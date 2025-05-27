import React, { useState } from 'react';
import { addToCart } from '../../../Apis/addToCart';
import { addToWishlist } from '../../../Apis/addToWishlist';
import { showToast } from '../../Toast';
import { useNavigate } from 'react-router';
import "../SearchModel/SearchModel.css";

const SearchModel = ({ onClose }) => {

    const [searchInput, setSearchInput] = useState("");
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();

    const searchByProductName = async () => {
        try {
            const response = await fetch(`https://ecomerceapis.runasp.net/api/Product/SearchProductsByName?query=${searchInput}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json-patch+json",
                },
            });

            const result = await response.json();
            setProducts(result.data || []);
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    }

    const handleSingleProductPage = (url) => {
        navigate(`/singleproduct?url=${url}`);
    }

    const fetchAddToCart = async (id) => {
        const result = await addToCart(id);
        if (result.status === 200) {
            showToast("Product added to cart!", "green");
        } else {
            showToast("Failed to add to cart!", "red");
        }
    }

    const fetchAddToWishlist = async (id) => {
        const result = await addToWishlist(id);
        if (result.status === 200) {
            showToast("Product added to Wishlist!", "green");
        } else {
            showToast("Failed to add to Wishlist!", "red");
        }
    }

    return (
        <div className="search-model">

            <div className="input-content">
                <input className="search-input" type="text" placeholder="What can we help you to find?"
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            searchByProductName();
                        }
                    }} />

                <svg className="search-svg" onClick={searchByProductName} width="24" height="24" viewBox="0 0 24 24" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <rect width="24" height="24" fill="white" />
                    <path
                        d="M11.5 21.75C5.85 21.75 1.25 17.15 1.25 11.5C1.25 5.85 5.85 1.25 11.5 1.25C17.15 1.25 21.75 5.85 21.75 11.5C21.75 17.15 17.15 21.75 11.5 21.75ZM11.5 2.75C6.67 2.75 2.75 6.68 2.75 11.5C2.75 16.32 6.67 20.25 11.5 20.25C16.33 20.25 20.25 16.32 20.25 11.5C20.25 6.68 16.33 2.75 11.5 2.75Z"
                        fill="#444444" />
                    <path
                        d="M22.0004 22.7499C21.8104 22.7499 21.6204 22.6799 21.4704 22.5299L19.4704 20.5299C19.1804 20.2399 19.1804 19.7599 19.4704 19.4699C19.7604 19.1799 20.2404 19.1799 20.5304 19.4699L22.5304 21.4699C22.8204 21.7599 22.8204 22.2399 22.5304 22.5299C22.3804 22.6799 22.1904 22.7499 22.0004 22.7499Z"
                        fill="#444444" />
                </svg>

                <svg onClick={onClose} className="search-cross" width="24" height="24" viewBox="0 0 24 24" fill="currentcolor"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12C1.25 6.07 6.07 1.25 12 1.25C17.93 1.25 22.75 6.07 22.75 12C22.75 17.93 17.93 22.75 12 22.75ZM12 2.75C6.9 2.75 2.75 6.9 2.75 12C2.75 17.1 6.9 21.25 12 21.25C17.1 21.25 21.25 17.1 21.25 12C21.25 6.9 17.1 2.75 12 2.75Z"
                        fill="#444444" />
                    <path
                        d="M9.17035 15.5801C8.98035 15.5801 8.79035 15.5101 8.64035 15.3601C8.35035 15.0701 8.35035 14.5901 8.64035 14.3001L14.3004 8.64011C14.5904 8.35011 15.0704 8.35011 15.3604 8.64011C15.6504 8.93011 15.6504 9.41011 15.3604 9.70011L9.70035 15.3601C9.56035 15.5101 9.36035 15.5801 9.17035 15.5801Z"
                        fill="#444444" />
                    <path
                        d="M14.8304 15.5801C14.6404 15.5801 14.4504 15.5101 14.3004 15.3601L8.64035 9.70011C8.35035 9.41011 8.35035 8.93011 8.64035 8.64011C8.93035 8.35011 9.41035 8.35011 9.70035 8.64011L15.3604 14.3001C15.6504 14.5901 15.6504 15.0701 15.3604 15.3601C15.2104 15.5101 15.0204 15.5801 14.8304 15.5801Z"
                        fill="#444444" />
                </svg>
            </div>

            <div className="searched-product-container">

                {products.map((value) => {
                    return (
                        <div className="searched-product-card" >

                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 576 512"
                                fill="currentColor"
                                className="product-card-svg"
                                onClick={() => fetchAddToCart(value.id)}
                            >
                                <path d="M0 24C0 10.7 10.7 0 24 0L69.5 0c22 0 41.5 12.8 50.6 32l411 0c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3l-288.5 0 5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5L488 336c13.3 0 24 10.7 24 24s-10.7 24-24 24l-288.3 0c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5L24 48C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96zM252 160c0 11 9 20 20 20l44 0 0 44c0 11 9 20 20 20s20-9 20-20l0-44 44 0c11 0 20-9 20-20s-9-20-20-20l-44 0 0-44c0-11-9-20-20-20s-20 9-20 20l0 44-44 0c-11 0-20 9-20 20z" />
                            </svg>

                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                                fill="currentcolor"
                                className="product-card-wish-svg"
                                onClick={() => fetchAddToWishlist(value.id)}
                            >
                                <path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" />
                            </svg>

                            <button
                                style={{
                                    backgroundColor: "transparent",
                                    border: "none",
                                    width: "92%",
                                    cursor: "pointer",
                                }}
                                onClick={() => { handleSingleProductPage(value.productURL) }}>
                                <img className="searched-product-img" src={`https://ecomerceapis.runasp.net/${value.imagePath[0]}`} alt={value.name} />

                                <div className="sepration" style={{ border: "1px solid #b4b4b4", marginTop: "5px" }}></div>

                                <p className="searched-product-name">
                                    {value.name}
                                </p>

                            </button>
                            <div className="price-and-rating-content">
                                <div className="searched-price">{value.price}</div>
                                <div className="searched-rating">
                                    <svg width="14" height="14" viewBox="0 0 18 18" fill="currentcolor"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M7.85873 1.51246C8.21795 0.406889 9.78205 0.406888 10.1413 1.51246L11.4248 5.46262C11.5854 5.95704 12.0461 6.2918 12.566 6.2918H16.7195C17.8819 6.2918 18.3653 7.77933 17.4248 8.46262L14.0646 10.9039C13.644 11.2095 13.468 11.7512 13.6287 12.2456L14.9122 16.1957C15.2714 17.3013 14.006 18.2207 13.0655 17.5374L9.70534 15.0961C9.28476 14.7905 8.71524 14.7905 8.29466 15.0961L4.93446 17.5374C3.994 18.2207 2.72862 17.3013 3.08784 16.1957L4.37133 12.2456C4.53198 11.7512 4.35599 11.2095 3.9354 10.9039L0.575201 8.46262C-0.365256 7.77934 0.118075 6.2918 1.28054 6.2918H5.43398C5.95385 6.2918 6.4146 5.95704 6.57525 5.46262L7.85873 1.51246Z"
                                            fill="#063A88" />
                                    </svg>4.5
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default SearchModel