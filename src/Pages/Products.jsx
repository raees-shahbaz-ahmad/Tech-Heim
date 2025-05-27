import React from 'react';
import ProductsNames from "../Components/ProductsPageComponents/ProductsNames/ProductsNames.jsx";
import FeatureContainer from "../Components/ProductsPageComponents/FeatureContainer/FeatureContainer.jsx";
import Services from "../Components/HomePageComponents/Services/Services.jsx";
import Footer from "../Components/Footer/Footer.jsx";

const Products = () => {
    return (
        <>
            <ProductsNames />
            <FeatureContainer />
            <Services />
            <Footer />
        </>
    );
}

export default Products;