import React, { useState, useContext } from "react";
import Image from "components/Image";
import RatingStars from "components/RatingStars";
import UserContext from "contexts/user";

const Product = ({ product, key }) => {
    const user = useContext(UserContext).data;
    const { toggleFavourite, addToCart } = useContext(UserContext);

    const handleFavouriteClick = (id) => {
        // Toggle the favourites
        console.log(id);

        // Toggle this as a favourite
        toggleFavourite(id);
    };

    const handleAddToCartClick = (id) => {
        // Toggle the favourites
        console.log(id);

        // Toggle this as a favourite
        addToCart(id);
        alert("Added to cart");
    };

    // console.log("User Data Favs:", user.favourites);

    // console.log(
    //     `User Fav ${product.id}:`,
    //     user.favourites.includes(product.id.toString())
    // );
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
                <button
                    type="button"
                    className="add-to-cart"
                    onClick={() => handleAddToCartClick(`${product.id}`)}
                >
                    Add to Cart
                </button>

                <button
                    type="button"
                    className="favorite-button"
                    onClick={() => handleFavouriteClick(`${product.id}`)}
                >
                    <span
                        className={`material-icons ${
                            user.favourites.includes(product.id.toString()) &&
                            `selected-favorite`
                        }`}
                    >
                        favorite
                    </span>
                </button>
            </footer>
        </article>
    );
};

export default Product;
