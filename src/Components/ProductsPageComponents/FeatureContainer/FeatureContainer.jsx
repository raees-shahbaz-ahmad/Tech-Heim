import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import "../FeatureContainer/FeatureContainer.css";

const FeatureContainer = () => {
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const [searchParams] = useSearchParams();
    const categoryId = searchParams.get("url");

    useEffect(() => {
        async function fetchCategories() {
            const res = await fetch("https://ecomerceapis.runasp.net/api/Category/GetAllCategories");
            const data = await res.json();
            setCategories(data.data);
        }
        fetchCategories();
    }, []);

    useEffect(() => {
        async function fetchProducts() {
            if (categoryId) {
                const res = await fetch(`https://ecomerceapis.runasp.net/api/Product/GetProductsByCategory/${categoryId}?childProducts=true`);
                const data = await res.json();
                setProducts(data.data);
            } else {
                const res = await fetch("https://ecomerceapis.runasp.net/api/Product/GetProductsWithPaging?pageNumber=1&pageSize=100");
                const data = await res.json();
                setProducts(data.data);
            }
        }
        fetchProducts();
    }, [categoryId]);

    return (
        <main>
            <div className="feature-container">
                <div className="filters">
                    <div className="heading-content">
                        <div className="heading">Filters</div>
                        <div className="clear">Clear all</div>
                    </div>
                    {categories.map((category) => (
                        <div className="result" key={category.id}>
                            <a className="btn" href={`/Product?url=${category.id}`}>
                                <p className='brand'>{category.name}</p>
                            </a>
                        </div>
                    ))}
                </div>

                <div className="featured">
                    {products.length > 0 ? (
                        products.map((product) => (
                            <div className="new-products-card" key={product.id}>
                                <img
                                    className="new-product-img"
                                    src={`https://ecomerceapis.runasp.net/${product.imagePath[0]}`}
                                    alt={product.name}
                                />
                                <div
                                    className="sepration"
                                    style={{ border: "1px solid #b4b4b4", marginTop: "5px" }}
                                ></div>
                                <p className="new-products-name">{product.name}</p>
                                <h3 style={{ width: "100%", textAlign: "center" }}>
                                    {product.categoryName}
                                </h3>
                                <div className="price-and-rating-content">
                                    <div className="price">$930.90</div>
                                    <div className="rating">
                                        <svg
                                            width="18"
                                            height="18"
                                            viewBox="0 0 18 18"
                                            fill="currentcolor"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M7.85873 1.51246C8.21795 0.406889 9.78205 0.406888 10.1413 1.51246L11.4248 5.46262C11.5854 5.95704 12.0461 6.2918 12.566 6.2918H16.7195C17.8819 6.2918 18.3653 7.77933 17.4248 8.46262L14.0646 10.9039C13.644 11.2095 13.468 11.7512 13.6287 12.2456L14.9122 16.1957C15.2714 17.3013 14.006 18.2207 13.0655 17.5374L9.70534 15.0961C9.28476 14.7905 8.71524 14.7905 8.29466 15.0961L4.93446 17.5374C3.994 18.2207 2.72862 17.3013 3.08784 16.1957L4.37133 12.2456C4.53198 11.7512 4.35599 11.2095 3.9354 10.9039L0.575201 8.46262C-0.365256 7.77934 0.118075 6.2918 1.28054 6.2918H5.43398C5.95385 6.2918 6.4146 5.95704 6.57525 5.46262L7.85873 1.51246Z"
                                                fill="#063A88"
                                            />
                                        </svg>
                                        4.5
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p style={{ textAlign: "center", width: "100%", padding: "20px", fontSize: "18px" }}>
                            No products found.
                        </p>
                    )}
                </div>
            </div>
        </main>
    );
};

export default FeatureContainer;