import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "pages/Home";
import Category from "pages/Category";
import FavouritePage from "pages/FavouritePage";
import Cart from "pages/Cart";
import UserContext from "contexts/user";
import firebase from "utils/firebase";

const App = () => {
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
    // console.log("Products data", productsData);

    // Runs only once, after the first render
    useEffect(() => {
        setCategoriesData({
            categoriesArr: [...categoriesArr],
            loading: true,
        });

        // READ: categories data
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

        // READ: products data
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
