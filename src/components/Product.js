import React, { useState } from "react";
import Image from "components/Image";

const Product = ({ product, key }) => {
    const fullStar = `<span class="material-icons rating-star"> star </span>`;
    const starBorder = `<span class="material-icons rating-star"> star_border </span>`;
    const halfStar = `<span class="material-icons rating-star"> star_half </span>`;
    let starsMap = new Map();

    function getStarString(ratings) {
        let index = 0;
        let stars = [];

        if (starsMap.get(ratings) !== undefined) {
            //
            return starsMap.get(ratings);
            //
        } else {
            //
            if (Number.isInteger(ratings)) {
                //
                for (index = 0; index < ratings; index++) {
                    stars.push(fullStar);
                }
                //
            } else {
                //
                for (index = 0; index < Math.floor(ratings); index++) {
                    stars.push(fullStar);
                }
                stars.push(halfStar);
                //
            }

            for (index = stars.length; index < 5; index++) {
                stars.push(starBorder);
            }
            //
            let starString = stars.join(``);
            //
            starsMap.set(ratings, starString);
            //
            return starString;
        }
    }

    let starString = getStarString(product.rating);

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
                    <dd> {starString} </dd>
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
