import React from "react";
import images from "components/images";

const Header = () => {
    return (
        <header className="page-header">
            <a href="index.html" className="logo">
                <img src={images.logo} alt="Fast Grocery Logo" />
            </a>

            <div className="search">
                <input
                    className="search-input"
                    type="search"
                    name="find"
                    id="find"
                    placeholder="Search for products"
                />
                <button type="button" className="search-button">
                    <span className="material-icons">search</span>
                </button>
            </div>

            <div className="my-account">
                <span>
                    <a href="login.html" target="_blank">
                        My Account <br />
                        Login / Sign Up
                    </a>
                </span>
                <button type="button" className="nav-toggle">
                    <span className="material-icons">menu</span>
                </button>
            </div>

            <div className="my-cart">
                <a href="#">
                    <span className="material-icons"> favorite_border </span>
                </a>
                <a href="#">
                    <span className="material-icons shopping-cart">
                        shopping_cart
                    </span>
                </a>
            </div>
        </header>
    );
};

export default Header;
