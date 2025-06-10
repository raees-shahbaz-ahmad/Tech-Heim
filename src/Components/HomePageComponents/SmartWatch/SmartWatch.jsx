import React from 'react'
import "../SmartWatch/SmartWatch.css";

const SmartWatch = () => {
    return (
        <div className="smart-watch-container">
            <img className="smart-watch-container-shape" src="./smart-watch-container-shape.png" />

            <div className="smart-watch-content">
                <div className="heading">SMART WATCH</div>
                <div className="para">Various designs and brands</div>
                <button className="btn">view</button>
            </div>
            <img className="smart-watch-img" src="./smarts-watches-imgs.png" />
        </div>
    )
}

export default SmartWatch