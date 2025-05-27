import React from 'react';
import SingleProduct from '../Components/SingleProductComponents/SingleProduct/SingleProduct.jsx';
import TechnicalDetails from '../Components/SingleProductComponents/TechnicalDetails/TechnicalDetails.jsx';
import SimilarProducts from '../Components/SingleProductComponents/SimilarProducts/SimilarProducts.jsx';
import Reviews from '../Components/SingleProductComponents/Reviews/Reviews.jsx';
import Footer from '../Components/Footer/Footer.jsx';

const SingleProductPage = () => {
    return (
        <>
            <SingleProduct />
            <TechnicalDetails />
            <SimilarProducts />
            <Reviews />
            <Footer />
        </>
    )
}

export default SingleProductPage;