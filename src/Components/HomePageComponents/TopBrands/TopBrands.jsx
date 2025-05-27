import React from 'react';
import "../TopBrands/TopBrands.css";

const TopBrands = () => {
    return (
        <div className="new-products">
            <div className="new-products-heading-content">
                <div className="new-products-heading">Top Brands</div>
                <div className="new-products-viewall">View all
                    <svg className="new-products-angle" viewBox="0 0 24 24"
                        fill="currentcolor" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M10.7397 16.2799C10.5497 16.2799 10.3597 16.2099 10.2097 16.0599C9.91969 15.7699 9.91969 15.2899 10.2097 14.9999L13.2097 11.9999L10.2097 8.99991C9.91969 8.70991 9.91969 8.22991 10.2097 7.93991C10.4997 7.64991 10.9797 7.64991 11.2697 7.93991L14.7997 11.4699C15.0897 11.7599 15.0897 12.2399 14.7997 12.5299L11.2697 16.0599C11.1197 16.2099 10.9297 16.2799 10.7397 16.2799Z"
                            fill="#0C0C0C" />
                    </svg>
                </div>
            </div>
            <div className="sepration" style={{ border: "1px solid #b4b4b4", marginTop: "15px" }}></div>

            <div className="top-brand-images" >
                <img className="top-brand-img" src="./apple-brand-img.png" />
                <img className="top-brand-img" src="./sony-brand-img.png" />
                <img className="top-brand-img" src="./samsung-brand-img.png" />
                <img className="top-brand-img" src="./canon-brand-img.png" />
                <img className="top-brand-img" src="./huawawa-brand-img.png" />
                <img className="top-brand-img" src="./lenovo-brand-img.png" />
            </div>
        </div >

    )
}

export default TopBrands;