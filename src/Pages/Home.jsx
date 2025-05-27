import React from 'react';
import HeroBanner from "../Components/HomePageComponents/HeroBanner/HeroBanner.jsx";
import Categories from '../Components/HomePageComponents/Categories/Categories.jsx';
import ProductsSale from '../Components/HomePageComponents/ProductsSale/ProductsSale.jsx';
import NewProducts from '../Components/HomePageComponents/NewProducts/NewProducts.jsx';
import BestSellers from "../Components/HomePageComponents/BestSellers/BestSellers.jsx";
import TopBrands from "../Components/HomePageComponents/TopBrands/TopBrands.jsx";
import Blogs from "../Components/HomePageComponents/Blogs/Blogs.jsx";
import Services from "../Components/HomePageComponents/Services/Services.jsx";
import Footer from "../Components/Footer/Footer.jsx";

const Home = () => {
    return (
        <>
            <HeroBanner />
            <Categories />
            <ProductsSale />
            <NewProducts />
            <BestSellers />
            <TopBrands />
            <Blogs />
            <Services />
            <Footer />
        </>
    );
};

export default Home;