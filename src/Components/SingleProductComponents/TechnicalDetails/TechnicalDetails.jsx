import React from 'react';
import "../TechnicalDetails/TechnicalDetails.css";

const TechnicalDetails = () => {
    return (
        <div className="technical-details">
            <div className="technical-details-lists">
                <li>Technical-Details</li>
                <li>Similar Products</li>
                <li>Comments</li>
            </div>
            <div className="sepration1" style={{ borderBottom: "1px solid gray", width: "100%" }}></div>
            <div className="heading">Technical-Details</div>

            <div className="technical-details-content">
                <p className="display">Display</p>
                <p className="para">13.3-inch (diagonal) LED-backlit display with IPS technology</p>
            </div>

            <div className="technical-details-content" style={{ backgroundColor: "white" }}>
                <p className="display">Graphics</p>
                <p className="para">Apple 10-core GPU</p>
            </div>

            <div className="technical-details-content">
                <p className="display">Processor</p>
                <p className="para">Apple M2 chip</p>
            </div>

            <div className="technical-details-content" style={{ backgroundColor: "white" }}>
                <p className="display">In the box</p>
                <p className="para">67W USB-C Power Adapter, USB-C Charge Cable (2 m)</p>
            </div>

            <div className="technical-details-content">
                <p className="display">Height</p>
                <p className="para">0.61 inch (1.56 cm)</p>
            </div>

            <div className="technical-details-content" style={{ backgroundColor: "white" }}>
                <p className="display">Width</p>
                <p className="para">11.97 inches (30.41 cm)</p>
            </div>

            <p className="show-more" style={{ marginLeft: "10px" }}>Show More
                <svg className="angle-down" fill="currentcolor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path
                        d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
                </svg>
            </p>
        </div>
    )
}

export default TechnicalDetails;