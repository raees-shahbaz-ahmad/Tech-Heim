import React, { useEffect, useState } from 'react';
import { getAllBanners } from '../../../Apis/getAllBanners';
import "./HeroBanner.css";

const HeroBanner = () => {

    const [heroBanner, setHeroBanner] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const data = await getAllBanners();
            setHeroBanner(data);
        }

        fetchData();
    }, []);

    return (
        <header>
            <div className="header-left">
                <div className="header-left-heading">{heroBanner.title}</div>
                <p className="header-left-para">
                    {heroBanner.description}
                </p>
                <button className="header-left-button">Explore More</button>
            </div>
            <img className="header-img" src={`https://ecomerceapis.runasp.net/${heroBanner.image}`} />
        </header>
    )
}

export default HeroBanner;