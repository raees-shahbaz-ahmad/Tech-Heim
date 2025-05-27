import React from 'react';
import "../Reviews/Reviews.css";

const Reviews = () => {
    return (
        <>
            <div className="similar-products-heading">Reviews</div>

            <div className="new-products-container">
                <img className="new-products" src="./reviews-img1.png" />
                <img className="new-products" src="./reviews-img2.png" />
                <img className="new-products" src="./reviews-img3.png" />
            </div>
        </>
    )
}

export default Reviews