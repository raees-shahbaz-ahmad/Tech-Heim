import React, { useEffect, useState } from 'react';
import { addToCart } from '../../../Apis/addToCart';
import { addToWishlist } from '../../../Apis/addToWishlist';
import { showToast } from '../../Toast';
import { useNavigate } from 'react-router-dom';
import { getProductsSale } from '../../../Apis/getProductsSale';
import LoginModel from '../../Models/LoginModels/LoginModel';
import Cookies from 'js-cookie';
import "../ProductsSale/ProductsSale.css";

const ProductSale = () => {

    const [ProductsSale, setProductsSale] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchData() {
            try {
                const data = await getProductsSale();
                setProductsSale(data);
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
            <div className="products-sale">
                <img className="cloude-img" src="./cloude-img.png" />
                <div className="products-sale-content">
                    <div className="products-sale-heading">
                        Products On Sale
                    </div>

                    <div className="products-sale-para">
                        Shop Now!
                    </div>

                    <div className="products-sale-view-all">
                        View all
                        <svg className="products-sale-angle" fill="currentcolor" xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 320 512">
                            <path
                                d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"
                            />
                        </svg>
                    </div>
                </div>

                <div className="products-sale-cards-container">
                    {ProductsSale.map((value) => {
                        return (
                            < div className="products-sale-card" key={value.id}>

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

                                    <img className="product-card-img" src={`https://ecomerceapis.runasp.net/${value.imagePath}`} />
                                    <div className="card-content">
                                        <p className="card-heading">{value.name}</p>
                                        <div className="card-price-content">
                                            <div className="old-price"><del>$38.00</del></div>
                                            <div className="new-price">${value.price}</div>
                                        </div>
                                    </div>
                                    <div className="off">
                                        -50%
                                    </div>
                                </button>
                            </div>
                        )
                    })}
                </div>
            </div >

            {isLoginModelOpen && <LoginModel onClose={closeModel} />}
        </>
    )
}

export default ProductSale;