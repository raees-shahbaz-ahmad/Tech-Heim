import React, { useEffect, useState } from 'react'
import { addToCart } from '../../../Apis/addToCart';
import { addToWishlist } from '../../../Apis/addToWishlist';
import { showToast } from '../../Toast';
import { useNavigate } from 'react-router-dom';
import { getProductsSale } from '../../../Apis/getProductsSale';
import LoginModel from '../../Models/LoginModels/LoginModel';
import Cookies from 'js-cookie';
import "../NewProducts/NewProducts.css";

const BestSellers = () => {

    const [bestSellers, setBestSellers] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchData() {
            try {
                const data = await getProductsSale();
                setBestSellers(data);
            } catch (error) {
                console.error("Unable to load getProducts", error);
            }
        }

        fetchData();
    }, []);

    const handleSingleProductPage = (url) => {
        navigate(`/singleproduct?url=${url}`);
    }

    const [isLoginModelOpen, setIsLoginModelOpen] = useState(false);
    const checkAuth = (callback) => {
        const token = Cookies.get("token");
        if (token) {
            callback();
        } else {
            setIsLoginModelOpen(true);
        }
    }

    const closeModel = () => {
        setIsLoginModelOpen(false);
    }

    const fetchAddToCart = async (id) => {
        checkAuth(async () => {
            const result = await addToCart(id);
            if (result.status === 200) {
                showToast("Product added to cart!", "green");
            } else {
                showToast("Failed to add to cart!", "red");
            }
        })
    }

    const fetchAddToWishlist = async (id) => {
        checkAuth(async () => {
            const result = await addToWishlist(id);
            if (result.status === 200) {
                showToast("Product added to Wishlist!", "green");
            } else {
                showToast("Failed to add to Wishlist!", "red");
            }
        })
    }

    return (
        <>
            <div className="best-sellers">
                <div className="new-products-heading-content">
                    <div className="new-products-heading">Best Sellers</div>
                    <div className="new-products-viewall">View all
                        <svg className="new-products-angle" viewBox="0 0 24 24" fill="currentcolor"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M10.7397 16.2799C10.5497 16.2799 10.3597 16.2099 10.2097 16.0599C9.91969 15.7699 9.91969 15.2899 10.2097 14.9999L13.2097 11.9999L10.2097 8.99991C9.91969 8.70991 9.91969 8.22991 10.2097 7.93991C10.4997 7.64991 10.9797 7.64991 11.2697 7.93991L14.7997 11.4699C15.0897 11.7599 15.0897 12.2399 14.7997 12.5299L11.2697 16.0599C11.1197 16.2099 10.9297 16.2799 10.7397 16.2799Z"
                                fill="#0C0C0C" />
                        </svg>
                    </div>
                </div>
                <div className="sepration" style={{ border: "1px solid #b4b4b4", marginTop: "15px" }}></div>

                <div className="best-sellers-cards-container">
                    {bestSellers.map((value) => {
                        return (
                            <div className="new-products-card" key={value.id}>

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


                                    <img className="new-product-img" src={`https://ecomerceapis.runasp.net/${value.imagePath}`} />
                                    <div className="sepration" style={{ border: "1px solid #b4b4b4", marginTop: "15px" }}></div>
                                    <p className="new-products-name">
                                        {value.name}
                                    </p>
                                </button>

                                <div className="price-and-rating-content">
                                    <div className="price">${value.price}</div>
                                    <div className="rating">
                                        <svg width="18" height="18" viewBox="0 0 18 18" fill="currentcolor"
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

            {isLoginModelOpen && <LoginModel onClose={closeModel} />}
        </>
    )

}

export default BestSellers;