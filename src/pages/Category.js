import React, { useState } from "react";
import Layout from "components/Layout";
import CategoryList from "components/CategoryList";
import RatingStars from "components/RatingStars";
import Image from "components/Image";
import CategoryProducts from "components/CategoryProducts";
import { useParams } from "react-router-dom";
import "css/category.css";

const Category = () => {
    const { slug } = useParams();

    //for now, id matches with array index.
    let categoriesDetails = [
        {
            id: 0,
            title: "Vegetables and Fruits Category",
            galleryImages: [
                {
                    altDetailsImage: "Apples",
                    categoryImagePath: "category/fruitsveggies/apples.jpg",
                },
                {
                    altDetailsImage: "Cauliflower",
                    categoryImagePath:
                        "category/fruitsveggies/cauliflower-thumb.jpg",
                },
            ],
            categoryInfo: {
                title: "Vegetables and Fruits Category Info",
                description: `We receive good qualities of fruits and
                vegetables from local vendors. Everything goes
                through thorough inspection to ensure safety of
                our dear customers. We import vegetables and
                fruits from different countries to give the
                customers best of the world products. Our
                products include Super gala apples, Cauliflower,
                Cabbage, Alphonso mangoes, etc. We also take
                request from customers to provide the products
                they want.`,
                averageRating: 4,
                email: "fruitsvegetablescategory@fastgrocery.com",
            },
            demoProducts: [{}, {}],
            suggestedProducts: [{}, {}],
        },
        {
            id: 1,
            galleryImages: [
                {
                    altDetailsImage: "",
                    categoryImagePath: "",
                },
                {
                    altDetailsImage: "",
                    categoryImagePath: "",
                },
            ],
            categoryInfo: {
                title: "",
                description: "",
                averageRating: 4,
                email: "",
            },
            demoProducts: [{}, {}],
            suggestedProducts: [{}, {}],
        },

        {
            id: 2,
            galleryImages: [
                {
                    altDetailsImage: "",
                    categoryImagePath: "",
                },
                {
                    altDetailsImage: "",
                    categoryImagePath: "",
                },
            ],
            categoryInfo: {
                title: "",
                description: "",
                averageRating: 4,
                email: "",
            },
            demoProducts: [{}, {}],
            suggestedProducts: [{}, {}],
        },
        {
            id: 3,
            galleryImages: [
                {
                    altDetailsImage: "",
                    categoryImagePath: "",
                },
                {
                    altDetailsImage: "",
                    categoryImagePath: "",
                },
            ],
            categoryInfo: {
                title: "",
                description: "",
                averageRating: 4,
                email: "",
            },
            demoProducts: [{}, {}],
            suggestedProducts: [{}, {}],
        },
        {
            id: 4,
            galleryImages: [
                {
                    altDetailsImage: "",
                    categoryImagePath: "",
                },
                {
                    altDetailsImage: "",
                    categoryImagePath: "",
                },
            ],
            categoryInfo: {
                title: "",
                description: "",
                averageRating: 4,
                email: "",
            },
            demoProducts: [{}, {}],
            suggestedProducts: [{}, {}],
        },
        {
            id: 5,
            galleryImages: [
                {
                    altDetailsImage: "",
                    categoryImagePath: "",
                },
                {
                    altDetailsImage: "",
                    categoryImagePath: "",
                },
            ],
            categoryInfo: {
                title: "",
                description: "",
                averageRating: 4,
                email: "",
            },
            demoProducts: [{}, {}],
            suggestedProducts: [{}, {}],
        },
        {
            id: 6,
            galleryImages: [
                {
                    altDetailsImage: "",
                    categoryImagePath: "",
                },
                {
                    altDetailsImage: "",
                    categoryImagePath: "",
                },
            ],
            categoryInfo: {
                title: "",
                description: "",
                averageRating: 4,
                email: "",
            },
            demoProducts: [{}, {}],
            suggestedProducts: [{}, {}],
        },

        {
            id: 7,
            galleryImages: [
                {
                    altDetailsImage: "",
                    categoryImagePath: "",
                },
                {
                    altDetailsImage: "",
                    categoryImagePath: "",
                },
            ],
            categoryInfo: {
                title: "",
                description: "",
                averageRating: 4,
                email: "",
            },
            demoProducts: [{}, {}],
            suggestedProducts: [{}, {}],
        },
        {
            id: 8,
            galleryImages: [
                {
                    altDetailsImage: "",
                    categoryImagePath: "",
                },
                {
                    altDetailsImage: "",
                    categoryImagePath: "",
                },
            ],
            categoryInfo: {
                title: "",
                description: "",
                averageRating: 4,
                email: "",
            },
            demoProducts: [{}, {}],
            suggestedProducts: [{}, {}],
        },
    ];

    //category specific products
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
    ];

    //category specific suggested products
    let suggestedProducts = [
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

    return (
        <Layout>
            <main className="">
                <article className="gallery-details-container">
                    <div className="category-basic-details-container">
                        <header className="">
                            <figure className="gallery" id="gallery">
                                <Image
                                    src={
                                        categoriesDetails[slug].galleryImages[0]
                                            .categoryImagePath
                                    }
                                    alt={
                                        categoriesDetails[slug].galleryImages[0]
                                            .altDetailsImage
                                    }
                                    id="img1"
                                    className="gallery-img active"
                                    width="100%"
                                ></Image>
                                <Image
                                    src={
                                        categoriesDetails[0].galleryImages[1]
                                            .categoryImagePath
                                    }
                                    alt={
                                        categoriesDetails[0].galleryImages[1]
                                            .altDetailsImage
                                    }
                                    id="img2"
                                    className="gallery-img"
                                    width="100%"
                                ></Image>
                                <ol className="gallery-controls" id="controls">
                                    <li>
                                        <button
                                            className="gallery-button active"
                                            aria-controls="img1"
                                            aria-label="Image 1"
                                        ></button>
                                    </li>
                                    <li>
                                        <button
                                            className="gallery-button"
                                            aria-controls="img2"
                                            aria-label="Image 2"
                                        ></button>
                                    </li>
                                </ol>
                            </figure>
                        </header>
                        <div className="category-info">
                            <h3>
                                {categoriesDetails[slug].categoryInfo.title}
                            </h3>
                            <p>
                                {
                                    categoriesDetails[slug].categoryInfo
                                        .description
                                }
                            </p>
                            <p>
                                The average rating for products in this category
                                is
                                <RatingStars
                                    rating={
                                        categoriesDetails[slug].categoryInfo
                                            .averageRating
                                    }
                                />
                            </p>

                            <p>
                                In case you face any issues/ queries with
                                products from this category, you can contact us
                                at
                                <a href="mailto:fruitsvegetablescategory@fastgrocery.com"></a>
                                {categoriesDetails[slug].categoryInfo.email}.
                            </p>
                            <p>
                                For general issues/ queries you can contact us
                                at
                                <a href="mailto:general@fastgrocery.com">
                                    general@fastgrocery.com
                                </a>
                                .
                            </p>
                        </div>
                    </div>

                    {/* Category Products */}
                    <CategoryProducts
                        products={products}
                        categoryTitle={categoriesDetails[slug].title}
                        categoryTitleSuffix="Products"
                    />

                    {/* Category Suggested Products */}
                    <CategoryProducts
                        products={suggestedProducts}
                        categoryTitle={categoriesDetails[slug].title}
                        categoryTitleSuffix="Suggested Products"
                    />
                </article>
            </main>
        </Layout>
    );
};

export default Category;
