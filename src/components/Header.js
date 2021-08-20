import React, { useContext } from "react";
import images from "components/images";
import UserContext from "contexts/user";
import { Link } from "react-router-dom";

const Header = () => {
    const user = useContext(UserContext).data;
    const cartArr = user.cart;

    let totalProducts = Number(0);

    cartArr.map((cartProd) => {
        console.log("cartProd.count", cartProd.count);
        totalProducts += parseInt(cartProd.count);
        console.log("totalProducts", totalProducts);
    });
    //
    return (
        <header className="page-header">
            <Link to="/" className="logo">
                <img src={images.logo} alt="Fast Grocery Logo" />
            </Link>

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
                <Link to="/favourite">
                    <span className="material-icons"> favorite_border </span>
                </Link>
                <Link to="/cart">
                    <span className="material-icons shopping-cart">
                        shopping_cart
                    </span>
                    <span>{totalProducts}</span>
                </Link>
            </div>
        </header>
    );
};

export default Header;
