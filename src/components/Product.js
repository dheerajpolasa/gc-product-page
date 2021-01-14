import React from 'react';

import ImageSection from './ImageSection';
import ProductDetails from './ProductDetails';

import '../styles/product.css';

function Product() {
    return (
        <div className="product__container">
            <ImageSection />
            <ProductDetails />
        </div>
    );
}

export default Product;
