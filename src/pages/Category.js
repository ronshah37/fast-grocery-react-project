import React, { useState } from "react";
import Layout from "components/Layout";
import CategoryList from "components/CategoryList";
import RatingStars from "components/RatingStars";
import Image from "components/Image";
import images from "components/images";
import { useParams } from "react-router-dom";
import "css/category.css";

const Category = () => {
    const { slug } = useParams();

    //for now, id matches with array index.
    let categoriesDetails = [
        {
            id: 0,
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

                    <div id="VFCategory" className="category">
                        <header className="heading">
                            <h2>Vegetables and Fruits Category Products</h2>
                        </header>
                        <section
                            id="VFCategoryProducts"
                            className="results"
                        ></section>

                        <nav aria-label="Pagination" className="pagination">
                            <p>1-6 of 23 products found</p>
                            <ol className="pages">
                                <li>
                                    <a
                                        href="#"
                                        aria-label="Current Page, Page 1"
                                        aria-current="true"
                                    >
                                        1
                                    </a>
                                </li>
                                <li>
                                    <a href="#" aria-label="Page 2">
                                        2
                                    </a>
                                </li>
                                <li>
                                    <a href="#" aria-label="Page 3">
                                        3
                                    </a>
                                </li>
                                <li>
                                    <a href="#" aria-label="Page 4">
                                        4
                                    </a>
                                </li>
                                <li>
                                    <a href="#" aria-label="Page 5">
                                        5
                                    </a>
                                </li>
                            </ol>
                        </nav>
                    </div>

                    <div id="suggestedProducts" className="suggested-products">
                        <header className="heading">
                            <h2>Suggested Products</h2>
                        </header>
                        <section
                            id="VFSuggestedProducts"
                            className="results"
                        ></section>

                        <nav aria-label="Pagination" className="pagination">
                            <p>1-6 of 18 products found</p>
                            <ol className="pages">
                                <li>
                                    <a
                                        href="#"
                                        aria-label="Current Page, Page 1"
                                        aria-current="true"
                                    >
                                        1
                                    </a>
                                </li>
                                <li>
                                    <a href="#" aria-label="Page 2">
                                        2
                                    </a>
                                </li>
                                <li>
                                    <a href="#" aria-label="Page 3">
                                        3
                                    </a>
                                </li>
                            </ol>
                        </nav>
                    </div>
                </article>
            </main>
        </Layout>
    );
};

export default Category;
