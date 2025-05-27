import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import "../SingleProduct/SingleProduct.css";

const SingleProduct = () => {

    const navigate = useNavigate();
    const [product, setProduct] = useState(null);
    const [searchParams] = useSearchParams();
    const productUrl = searchParams.get("url");

    useEffect(() => {
        async function fetchSingleProduct() {
            const response = await fetch(`https://ecomerceapis.runasp.net/api/Product/GetProductByURL/url?url=${productUrl}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json-patch+json",
                },
            });

            const data = await response.json();
            setProduct(data);
        }
        fetchSingleProduct();
    }, [])

    const handleBuyNowClick = (url) => {
        navigate(`/checkout?url=${url}`);
    }

    return (
        <div className="product-info-container">
            {!product ? (
                <p>Loading...</p>
            ) : (
                <>
                    <div className="img-content">
                        <img className="product-img" src={`https://ecomerceapis.runasp.net/${product.data.imagePath}`} />
                        <div className="product-small-imgs">
                            <img className="product-small-img" src="./product-small-img1.png" />
                            <img className="product-small-img" src="./product-small-img2.png" />
                            <img className="product-small-img" src="./product-small-img3.png" />
                            <img className="product-small-img" src="./product-small-img4.png" />
                            <img className="product-small-img" src="./product-small-img5.png" />
                        </div>
                    </div>

                    <div className="price-card">
                        <div className="product-name">
                            {product.data.name}
                        </div>
                        <div className="price">${product.data.price}</div>
                        <div className="pay-content">
                            <input type="checkbox" />
                            <p>Pay Now</p>
                        </div>

                        <p className="installment-period">{product.data.productURL}</p>

                        <p className="price-par-month">$433.00</p>
                        <button onClick={() => { handleBuyNowClick(product.data.productURL) }} className="buy-now-btn">Buy now</button>
                        <button className="add-cart">Add to Cart</button>

                    </div>
                </>
            )}
        </div >
    )
}

export default SingleProduct;