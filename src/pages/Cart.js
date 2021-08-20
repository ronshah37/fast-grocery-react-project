import React, { useContext } from "react";
import Layout from "components/Layout";
import Image from "components/Image";
import UserContext from "contexts/user";
import { useParams } from "react-router-dom";
import "css/cart.css";

const Cart = () => {
    const { slug } = useParams();

    let products = [
        {
            id: 0,
            productLabel: "Apples",
            altDetailsImage: "Apple Product Image",
            productImagePath: "products/apples.jpg",
            oldPrice: 15.0,
            newPrice: 10.0,
            productDescription: "Delicious super gala apples.",
            rating: 1,
            deliveryTypes: [`two_hours`, `one_day`],
            discount: [`ten_percent`],
            favoriteClass: `selected-favorite`,
            favoriteContent: `favorite`,
        },
        {
            id: 1,
            productLabel: "Cauliflower",
            altDetailsImage: "Cauliflower Product Image",
            productImagePath: "products/cauliflower-thumb.jpg",
            oldPrice: 9.0,
            newPrice: 7.0,
            productDescription: "Fresh Cauliflower!",
            rating: 2,
            deliveryTypes: [`two_hours`, `one_day`],
            discount: [`fifty_percent`],
            favoriteClass: `selected-favorite`,
            favoriteContent: `favorite`,
        },
        {
            id: 2,
            productLabel: "Ivy Gourd",
            altDetailsImage: "Ivy Gourd Product Image",
            productImagePath: "products/Ivy_gourd.jpg",
            oldPrice: 15.0,
            newPrice: 12.0,
            productDescription: "Indian Ivy Gourd",
            rating: 3,
            deliveryTypes: [`one_day`, `two_days`],
            discount: [`ten_percent`],
            favoriteClass: `unselected-favorite`,
            favoriteContent: `favorite_border`,
        },
        {
            id: 3,
            productLabel: "Long Squash",
            altDetailsImage: "Long Squash Product Image",
            productImagePath: "products/long_squash.jpg",
            oldPrice: 9.0,
            newPrice: 6.0,
            productDescription: "Fresh Long Squash",
            rating: 4,
            deliveryTypes: [`two_hours`, `two_days`],
            discount: [`thirty_percent`],
            favoriteClass: `unselected-favorite`,
            favoriteContent: `favorite_border`,
        },
        {
            id: 4,
            productLabel: "Mangoes",
            altDetailsImage: "Mangoes Product Image",
            productImagePath: "products/mangoes.jpg",
            oldPrice: 50.0,
            newPrice: 45.0,
            productDescription: "Delicious Alphonso Mangoes",
            rating: 3,
            deliveryTypes: [`two_hours`, `one_day`],
            discount: [`forty_percent`],
            favoriteClass: `selected-favorite`,
            favoriteContent: `favorite`,
        },
        {
            id: 5,
            productLabel: "Oranges",
            altDetailsImage: "Orange Product Image",
            productImagePath: "products/Oranges.jpg",
            oldPrice: 50.0,
            newPrice: 39.0,
            productDescription: "Rich in Vitamin C",
            rating: 4,
            deliveryTypes: [`two_hours`, `two_days`],
            discount: [`twenty_percent`],
            favoriteClass: `selected-favorite`,
            favoriteContent: `favorite`,
        },
        {
            id: 6,
            productLabel: "Avocado",
            altDetailsImage: "Avocado Product Image",
            productImagePath: "products/Avocado.jpg",
            oldPrice: 50.0,
            newPrice: 39.0,
            productDescription: "Avocado",
            rating: 4,
            deliveryTypes: [`two_hours`, `two_days`],
            discount: [`twenty_percent`],
            favoriteClass: `selected-favorite`,
            favoriteContent: `favorite`,
        },
        {
            id: 7,
            productLabel: "Banana",
            altDetailsImage: "Banana Product Image",
            productImagePath: "products/banana.jpg",
            oldPrice: 50.0,
            newPrice: 39.0,
            productDescription: "Banana",
            rating: 4,
            deliveryTypes: [`two_hours`, `two_days`],
            discount: [`twenty_percent`],
            favoriteClass: `selected-favorite`,
            favoriteContent: `favorite`,
        },
        {
            id: 8,
            productLabel: "Broccoli",
            altDetailsImage: "Broccoli Product Image",
            productImagePath: "products/broccoli.webp",
            oldPrice: 50.0,
            newPrice: 39.0,
            productDescription: "Broccoli",
            rating: 4,
            deliveryTypes: [`two_hours`, `two_days`],
            discount: [`twenty_percent`],
            favoriteClass: `selected-favorite`,
            favoriteContent: `favorite`,
        },
        {
            id: 9,
            productLabel: "Cabbage",
            altDetailsImage: "Cabbage Product Image",
            productImagePath: "products/cabbage.png",
            oldPrice: 50.0,
            newPrice: 39.0,
            productDescription: "Cabbage",
            rating: 4,
            deliveryTypes: [`two_hours`, `two_days`],
            discount: [`twenty_percent`],
            favoriteClass: `selected-favorite`,
            favoriteContent: `favorite`,
        },
        {
            id: 10,
            productLabel: "Carrots",
            altDetailsImage: "Carrots Product Image",
            productImagePath: "products/carrots.jpg",
            oldPrice: 50.0,
            newPrice: 39.0,
            productDescription: "Carrots",
            rating: 4,
            deliveryTypes: [`two_hours`, `two_days`],
            discount: [`twenty_percent`],
            favoriteClass: `selected-favorite`,
            favoriteContent: `favorite`,
        },
        {
            id: 11,
            productLabel: "Cucumber",
            altDetailsImage: "Cucumber Product Image",
            productImagePath: "products/cucumber.jpg",
            oldPrice: 50.0,
            newPrice: 39.0,
            productDescription: "Cucumber",
            rating: 4,
            deliveryTypes: [`two_hours`, `two_days`],
            discount: [`twenty_percent`],
            favoriteClass: `selected-favorite`,
            favoriteContent: `favorite`,
        },
        {
            id: 12,
            productLabel: "Drumstick",
            altDetailsImage: "Drumstick Product Image",
            productImagePath: "products/drumstick.jpg",
            oldPrice: 50.0,
            newPrice: 39.0,
            productDescription: "Drumstick",
            rating: 4,
            deliveryTypes: [`two_hours`, `two_days`],
            discount: [`twenty_percent`],
            favoriteClass: `selected-favorite`,
            favoriteContent: `favorite`,
        },
        {
            id: 13,
            productLabel: "Eggplant",
            altDetailsImage: "Eggplant Product Image",
            productImagePath: "products/eggplant.png",
            oldPrice: 50.0,
            newPrice: 39.0,
            productDescription: "Eggplant",
            rating: 4,
            deliveryTypes: [`two_hours`, `two_days`],
            discount: [`twenty_percent`],
            favoriteClass: `selected-favorite`,
            favoriteContent: `favorite`,
        },
        {
            id: 14,
            productLabel: "Green Pepper",
            altDetailsImage: "Green Pepper Product Image",
            productImagePath: "products/green-pepper.jpg",
            oldPrice: 50.0,
            newPrice: 39.0,
            productDescription: "Green Pepper",
            rating: 4,
            deliveryTypes: [`two_hours`, `two_days`],
            discount: [`twenty_percent`],
            favoriteClass: `selected-favorite`,
            favoriteContent: `favorite`,
        },
        {
            id: 15,
            productLabel: "Kiwi",
            altDetailsImage: "Kiwi Product Image",
            productImagePath: "products/kiwi.jpg",
            oldPrice: 50.0,
            newPrice: 39.0,
            productDescription: "Kiwi",
            rating: 4,
            deliveryTypes: [`two_hours`, `two_days`],
            discount: [`twenty_percent`],
            favoriteClass: `selected-favorite`,
            favoriteContent: `favorite`,
        },
        {
            id: 16,
            productLabel: "Lady Finger",
            altDetailsImage: "Lady Finger Product Image",
            productImagePath: "products/lady-finger.jpeg",
            oldPrice: 50.0,
            newPrice: 39.0,
            productDescription: "Lady Finger",
            rating: 4,
            deliveryTypes: [`two_hours`, `two_days`],
            discount: [`twenty_percent`],
            favoriteClass: `selected-favorite`,
            favoriteContent: `favorite`,
        },
        {
            id: 17,
            productLabel: "Onion",
            altDetailsImage: "Onion Product Image",
            productImagePath: "products/onion.jpg",
            oldPrice: 50.0,
            newPrice: 39.0,
            productDescription: "Onion",
            rating: 4,
            deliveryTypes: [`two_hours`, `two_days`],
            discount: [`twenty_percent`],
            favoriteClass: `selected-favorite`,
            favoriteContent: `favorite`,
        },
        {
            id: 18,
            productLabel: "Oranges",
            altDetailsImage: "Orange Product Image",
            productImagePath: "products/Oranges.jpg",
            oldPrice: 50.0,
            newPrice: 39.0,
            productDescription: "Rich in Vitamin C",
            rating: 4,
            deliveryTypes: [`two_hours`, `two_days`],
            discount: [`twenty_percent`],
            favoriteClass: `selected-favorite`,
            favoriteContent: `favorite`,
        },
        {
            id: 19,
            productLabel: "Papaya",
            altDetailsImage: "Papaya Product Image",
            productImagePath: "products/papaya.jpg",
            oldPrice: 50.0,
            newPrice: 39.0,
            productDescription: "Papaya",
            rating: 4,
            deliveryTypes: [`two_hours`, `two_days`],
            discount: [`twenty_percent`],
            favoriteClass: `selected-favorite`,
            favoriteContent: `favorite`,
        },
        {
            id: 20,
            productLabel: "Peas",
            altDetailsImage: "Peas Product Image",
            productImagePath: "products/peas.jpg",
            oldPrice: 50.0,
            newPrice: 39.0,
            productDescription: "Peas",
            rating: 4,
            deliveryTypes: [`two_hours`, `two_days`],
            discount: [`twenty_percent`],
            favoriteClass: `selected-favorite`,
            favoriteContent: `favorite`,
        },
        {
            id: 21,
            productLabel: "Pineapple",
            altDetailsImage: "Pineapple Product Image",
            productImagePath: "products/pineapple.jpg",
            oldPrice: 50.0,
            newPrice: 39.0,
            productDescription: "Pineapple",
            rating: 4,
            deliveryTypes: [`two_hours`, `two_days`],
            discount: [`twenty_percent`],
            favoriteClass: `selected-favorite`,
            favoriteContent: `favorite`,
        },
        {
            id: 22,
            productLabel: "Pomegranate",
            altDetailsImage: "Pomegranate Product Image",
            productImagePath: "products/pomegranate.jpg",
            oldPrice: 50.0,
            newPrice: 39.0,
            productDescription: "Pomegranate",
            rating: 4,
            deliveryTypes: [`two_hours`, `two_days`],
            discount: [`twenty_percent`],
            favoriteClass: `selected-favorite`,
            favoriteContent: `favorite`,
        },
        {
            id: 23,
            productLabel: "Potato",
            altDetailsImage: "Potato Product Image",
            productImagePath: "products/potato.jpg",
            oldPrice: 50.0,
            newPrice: 39.0,
            productDescription: "Potato",
            rating: 4,
            deliveryTypes: [`two_hours`, `two_days`],
            discount: [`twenty_percent`],
            favoriteClass: `selected-favorite`,
            favoriteContent: `favorite`,
        },
        {
            id: 24,
            productLabel: "Raspberry",
            altDetailsImage: "Raspberry Product Image",
            productImagePath: "products/raspberry.jpg",
            oldPrice: 50.0,
            newPrice: 39.0,
            productDescription: "Raspberry",
            rating: 4,
            deliveryTypes: [`two_hours`, `two_days`],
            discount: [`twenty_percent`],
            favoriteClass: `selected-favorite`,
            favoriteContent: `favorite`,
        },
        {
            id: 25,
            productLabel: "Red Bell Pepper",
            altDetailsImage: "Red Bell Pepper Product Image",
            productImagePath: "products/red_bell_pepper.png",
            oldPrice: 50.0,
            newPrice: 39.0,
            productDescription: "Red Bell Pepper",
            rating: 4,
            deliveryTypes: [`two_hours`, `two_days`],
            discount: [`twenty_percent`],
            favoriteClass: `selected-favorite`,
            favoriteContent: `favorite`,
        },
        {
            id: 26,
            productLabel: "Red Grapes",
            altDetailsImage: "Red Grapes Product Image",
            productImagePath: "products/red_grapes.jpg",
            oldPrice: 50.0,
            newPrice: 39.0,
            productDescription: "Red Grapes",
            rating: 4,
            deliveryTypes: [`two_hours`, `two_days`],
            discount: [`twenty_percent`],
            favoriteClass: `selected-favorite`,
            favoriteContent: `favorite`,
        },
        {
            id: 27,
            productLabel: "Tomatoes",
            altDetailsImage: "Tomatoes Product Image",
            productImagePath: "products/tomatoes.png",
            oldPrice: 50.0,
            newPrice: 39.0,
            productDescription: "Tomatoes",
            rating: 4,
            deliveryTypes: [`two_hours`, `two_days`],
            discount: [`twenty_percent`],
            favoriteClass: `selected-favorite`,
            favoriteContent: `favorite`,
        },
        {
            id: 28,
            productLabel: "White Radish",
            altDetailsImage: "White Radish Product Image",
            productImagePath: "products/white_radish.png",
            oldPrice: 50.0,
            newPrice: 39.0,
            productDescription: "White Radish",
            rating: 4,
            deliveryTypes: [`two_hours`, `two_days`],
            discount: [`twenty_percent`],
            favoriteClass: `selected-favorite`,
            favoriteContent: `favorite`,
        },
        {
            id: 29,
            productLabel: "Zuchinni",
            altDetailsImage: "Zuchinni Product Image",
            productImagePath: "products/zuchinni.jpg",
            oldPrice: 50.0,
            newPrice: 39.0,
            productDescription: "Zuchinni",
            rating: 4,
            deliveryTypes: [`two_hours`, `two_days`],
            discount: [`twenty_percent`],
            favoriteClass: `selected-favorite`,
            favoriteContent: `favorite`,
        },
    ];

    const useMoney = (cents) => {
        return `$ ${(cents / 100).toFixed(2)}`;
    };

    const user = useContext(UserContext).data;
    const cartArr = user.cart;

    let subtotal = 0;
    let cartProduct;
    const cartArrDisplay = cartArr.map((cartProd) => {
        cartProduct = products.find(
            (prod) => prod.id.toString() === cartProd.id
        );
        subtotal += cartProduct.newPrice * cartProd.count;
        console.log("cartProduct", cartProduct);
        return (
            <li className="cart-row" key={cartProduct.id}>
                <Image
                    src={cartProduct.productImagePath}
                    alt={cartProduct.altDetailsImage}
                    className="cart-product-image"
                />
                <b>{cartProduct.productLabel}</b> ({cartProd.count} x{" "}
                {useMoney(cartProduct.newPrice)}){" "}
                <b>{useMoney(cartProduct.newPrice * cartProd.count)}</b>
            </li>
        );
    });

    return (
        <Layout>
            <section className="cart-wrapper">
                <h2 className="heading">You are in your Cart page</h2>

                <div className="cart-products">
                    {cartArrDisplay.length > 0 ? (
                        <ul className="cart-row-wrapper"> {cartArrDisplay} </ul>
                    ) : (
                        <p className="empyt-cart-message">
                            Your Favourite page is empty
                        </p>
                    )}
                </div>
                {Boolean(cartArrDisplay.length) && (
                    <div className="checkout-button-div">
                        <button>Check out {useMoney(subtotal)}</button>
                    </div>
                )}
            </section>
        </Layout>
    );
};

export default Cart;
