import React, { useState } from "react";
import Product from "components/Product";

const ProductList = ({ products }) => {
    const productSummary = products.map((product) => (
        <Product key={product.id} product={product} />
    ));

    return (
        <section id="filteredResults" className="results">
            {productSummary}
        </section>
    );
};

export default ProductList;
