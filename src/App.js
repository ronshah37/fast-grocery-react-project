import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "pages/Home";
import Category from "pages/Category";
import FavouritePage from "pages/FavouritePage";
import Cart from "pages/Cart";
import UserContext from "contexts/user";
import firebase from "utils/firebase";
import { Link } from "react-router-dom";

const App = () => {
    let categories = [
        {
            id: 0,
            categoryLabel: "Vegetables and Fruits",
            altDetailsImage: "Vegetables and Fruits Category",
            categoryImagePath: "categories/07.jpg",
            categoryPageURL: "category.html",
        },
        {
            id: 1,
            categoryLabel: "Beverages",
            altDetailsImage: "Beverages Category",
            categoryImagePath: "categories/06_1.jpg",
            categoryPageURL: "VegetablesFruitsCategory.html",
        },

        {
            id: 2,
            categoryLabel: "Bath and Body",
            altDetailsImage: "Bath and Body Category",
            categoryImagePath: "categories/02_6.jpg",
            categoryPageURL: "category.html",
        },
        {
            id: 3,
            categoryLabel: "Food and Snacks",
            altDetailsImage: "Food and Snacks Category",
            categoryImagePath: "categories/03_5.jpg",
            categoryPageURL: "category.html",
        },
        {
            id: 4,
            categoryLabel: "Household Items",
            altDetailsImage: "Household Items Category",
            categoryImagePath: "categories/04_5.jpg",
            categoryPageURL: "category.html",
        },
        {
            id: 5,
            categoryLabel: "Home and Kitchen",
            altDetailsImage: "Home and Kitchen",
            categoryImagePath: "categories/05_1.jpg",
            categoryPageURL: "category.html",
        },
        {
            id: 6,
            categoryLabel: "Dal, Atta and more",
            altDetailsImage: "Dal, Atta and More Category",
            categoryImagePath: "categories/01_9.jpg",
            categoryPageURL: "category.html",
        },

        {
            id: 7,
            categoryLabel: "Baby and Pet Care",
            altDetailsImage: "Baby and Pet Care Category",
            categoryImagePath: "categories/08_2.jpg",
            categoryPageURL: "category.html",
        },
        {
            id: 8,
            categoryLabel: "Fashion Store",
            altDetailsImage: "Fashion Category",
            categoryImagePath: "categories/09_1.jpg",
            categoryPageURL: "category.html",
        },
    ];

    let carousel = [
        {
            id: 0,
            slideImageAltText: "60 Percent Offer",
            slideImagePath: "ads/60_percent_offer.jpg",
            offerPageURL: "#",
        },
        {
            id: 1,
            slideImageAltText: "Beauty Bestsellers Offers",
            slideImagePath: "ads/beauty_bestsellers_offers.jpg",
            offerPageURL: "#",
        },

        {
            id: 2,
            slideImageAltText: "5 Percent Coupon",
            slideImagePath: "ads/5_percent_coupon.jpg",
            offerPageURL: "#",
        },
    ];

    let products = [
        {
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

    // fetch() my user data, ensure it's on every page
    const [userData, setUserData] = useState({
        id: 1234,
        username: `juneate`,
        photo: `tim-berners-lee.jpg`,
        favourites: [],
        cart: [],
    });

    const toggleFavourite = (id) => {
        console.log("Enter toggle Fav");
        if (userData.favourites.includes(id)) {
            // Slice out a
            console.log("Remove toggle Fav");
            setUserData({
                ...userData,
                favourites: userData.favourites.filter((fav) => fav !== id),
            });
        } else {
            // Add it in
            console.log("Add toggle Fav");
            setUserData({
                ...userData,
                favourites: [...userData.favourites, id],
            });
        }
    };

    const addToCart = (id) => {
        console.log("Add to cart");
        const index = userData.cart.findIndex((val) => val.id === id);

        if (index === -1)
            // product not found in the cart
            userData.cart.push({ id: id, count: 1 });
        else userData.cart[index].count++; // increase the "count" by +1

        setUserData({
            ...userData,
            cart: [...userData.cart],
        });
    };

    // Connect to the DB
    const db = firebase.firestore();

    const [categoriesData, setCategoriesData] = useState({
        categoriesArr: [],
        loading: true,
    });
    const { categoriesArr, loading } = categoriesData;
    // console.log("Categories data", categoriesArr);

    const [productsData, setProductsData] = useState({
        productsArr: [],
        ploading: true,
    });
    const { productsArr, ploading } = productsData;
    console.log("Products data", productsData);

    // Runs only once, after the first render
    useEffect(() => {
        setCategoriesData({
            categoriesArr: [...categoriesArr],
            loading: true,
        });

        // READ: student data
        db.collection(`categories`)
            .get()
            .then((snapshot) => {
                setCategoriesData({
                    categoriesArr: snapshot.docs.reduce(
                        (categories, doc) => [...categories, doc.data()],
                        []
                    ),
                    loading: false,
                });
            });

        setProductsData({
            productsArr: [...productsArr],
            ploading: true,
        });

        // READ: student data
        db.collection(`products`)
            .get()
            .then((snapshot) => {
                setProductsData({
                    productsArr: snapshot.docs.reduce(
                        (products, doc) => [...products, doc.data()],
                        []
                    ),
                    ploading: false,
                });
            });
    }, []);

    return (
        <Router>
            <UserContext.Provider
                value={{
                    data: userData,
                    toggleFavourite: toggleFavourite,
                    addToCart: addToCart,
                }}
            >
                <Switch>
                    <Route exact path="/">
                        <Home
                            categories={categoriesArr}
                            carousel={carousel}
                            products={productsArr}
                        />
                    </Route>
                    <Route path="/category/:slug">
                        <Category />
                    </Route>
                    <Route path="/favourite">
                        <FavouritePage />
                    </Route>
                    <Route path="/cart">
                        <Cart />
                    </Route>
                </Switch>
            </UserContext.Provider>
        </Router>
    );
};

export default App;
