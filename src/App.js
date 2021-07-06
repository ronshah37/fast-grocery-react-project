import React from "react";
import Home from "pages/Home";

const App = () => {
    let categories = [
        {
            id: 0,
            categoryLabel: "Vegetables and Fruits",
            altDetailsImage: "Vegetables and Fruits Category",
            categoryImagePath: "categories/07.avif",
            categoryPageURL: "category.html",
        },
        {
            id: 1,
            categoryLabel: "Beverages",
            altDetailsImage: "Beverages Category",
            categoryImagePath: "categories/06_1.avif",
            categoryPageURL: "VegetablesFruitsCategory.html",
        },

        {
            id: 2,
            categoryLabel: "Bath and Body",
            altDetailsImage: "Bath and Body Category",
            categoryImagePath: "categories/02_6.avif",
            categoryPageURL: "category.html",
        },
        {
            id: 3,
            categoryLabel: "Food and Snacks",
            altDetailsImage: "Food and Snacks Category",
            categoryImagePath: "categories/03_5.avif",
            categoryPageURL: "category.html",
        },
        {
            id: 4,
            categoryLabel: "Household Items",
            altDetailsImage: "Household Items Category",
            categoryImagePath: "categories/04_5.avif",
            categoryPageURL: "category.html",
        },
        {
            id: 5,
            categoryLabel: "Home and Kitchen",
            altDetailsImage: "Home and Kitchen",
            categoryImagePath: "categories/05_1.avif",
            categoryPageURL: "category.html",
        },
        {
            id: 6,
            categoryLabel: "Dal, Atta and more",
            altDetailsImage: "Dal, Atta and More Category",
            categoryImagePath: "categories/01_9.avif",
            categoryPageURL: "category.html",
        },

        {
            id: 7,
            categoryLabel: "Baby and Pet Care",
            altDetailsImage: "Baby and Pet Care Category",
            categoryImagePath: "categories/08_2.avif",
            categoryPageURL: "category.html",
        },
        {
            id: 8,
            categoryLabel: "Fashion Store",
            altDetailsImage: "Fashion Category",
            categoryImagePath: "categories/09_1.avif",
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
            slideImagePath: "ads/beauty_bestsellers_offers.webp",
            offerPageURL: "#",
        },

        {
            id: 2,
            slideImageAltText: "5 Percent Coupon",
            slideImagePath: "ads/5_percent_coupon.jpg",
            offerPageURL: "#",
        },
    ];

    return <Home categories={categories} carousel={carousel} />;
};

export default App;
