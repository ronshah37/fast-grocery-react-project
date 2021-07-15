import React, { useState } from "react";
import Image from "components/Image";
import RatingStars from "components/RatingStars";

const Product = ({ product, key }) => {
    return (
        <article className="product">
            <header>
                <Image
                    src={product.productImagePath}
                    alt={product.altDetailsImage}
                />
                <h3>{product.productLabel}</h3>
                <data value={product.newPrice}>
                    <del>${product.oldPrice}</del>
                    <span className="new-price">
                        <ins>${product.newPrice}</ins>
                    </span>
                </data>
                <p>{product.productDescription}</p>
                <dl>
                    <dd>
                        <RatingStars rating={product.rating} />
                    </dd>
                </dl>
            </header>
            <footer className="product-footer">
                <button type="button" className="add-to-cart">
                    Add to Cart
                </button>
                <button type="button" className="favorite-button">
                    <span className="material-icons ${product.favoriteClass}">
                        {product.favoriteContent}
                    </span>
                </button>
            </footer>
        </article>
    );
};

export default Product;
