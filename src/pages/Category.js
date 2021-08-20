import React, { useState, useEffect } from "react";
import Layout from "components/Layout";
import RatingStars from "components/RatingStars";
import Image from "components/Image";
import CategoryProducts from "components/CategoryProducts";
import { useParams } from "react-router-dom";
import firebase from "utils/firebase";
import "css/category.css";

const Category = () => {
    //slug here will have value of category id
    const { slug } = useParams();

    const [categoriesDetailsData, setCategoriesDetailsData] = useState({
        categoryDetails: undefined,
    });
    const { categoryDetails } = categoriesDetailsData;

    //Currently getting standard list of products for all categories
    const [productsData, setProductsData] = useState({
        productsArr: [],
    });
    const { productsArr } = productsData;

    //category specific products
    let products = productsArr !== [] ? productsArr.slice(0, 15) : [];

    //category specific suggested products
    let suggestedProducts = productsArr !== [] ? productsArr.slice(16, 30) : [];

    // Connect to the DB
    const db = firebase.firestore();

    // Runs only once, after the first render
    useEffect(() => {
        setCategoriesDetailsData({
            categoryDetails: categoryDetails,
        });

        // READ: categories data
        db.collection(`categorydetails`)
            .doc(slug)
            .get()
            .then((doc) => {
                console.log("Category Data", doc.data());
                setCategoriesDetailsData({
                    categoryDetails: doc.data(),
                });
            });

        setProductsData({
            productsArr: [...productsArr],
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
                });
            });
    }, []);

    return (
        <Layout>
            <main className="">
                <article className="gallery-details-container">
                    <div className="category-basic-details-container">
                        <header className="">
                            <figure className="gallery" id="gallery">
                                <Image
                                    src={
                                        categoryDetails !== undefined
                                            ? categoryDetails.galleryImages[0]
                                                  .categoryImagePath
                                            : ""
                                    }
                                    alt={
                                        categoryDetails !== undefined
                                            ? categoryDetails.galleryImages[0]
                                                  .altDetailsImage
                                            : "Gallery Image 1"
                                    }
                                    id="img1"
                                    className="gallery-img active"
                                    width="100%"
                                ></Image>
                                <Image
                                    src={
                                        categoryDetails !== undefined
                                            ? categoryDetails.galleryImages[1]
                                                  .categoryImagePath
                                            : ""
                                    }
                                    alt={
                                        categoryDetails !== undefined
                                            ? categoryDetails.galleryImages[1]
                                                  .altDetailsImage
                                            : "Gallery Image 1"
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
                                {categoryDetails !== undefined
                                    ? categoryDetails.categoryInfo.title
                                    : "Category Title"}
                            </h3>
                            <p>
                                {categoryDetails !== undefined
                                    ? categoryDetails.categoryInfo.description
                                    : "Category Description"}
                            </p>
                            <p>
                                The average rating for products in this category
                                is
                                <p>
                                    <RatingStars
                                        rating={
                                            categoryDetails !== undefined
                                                ? categoryDetails.categoryInfo
                                                      .averageRating
                                                : 5
                                        }
                                    />
                                </p>
                            </p>

                            <p>
                                In case you face any issues/ queries with
                                products from this category, you can contact us
                                at{" "}
                                <a href="mailto:fruitsvegetablescategory@fastgrocery.com">
                                    {categoryDetails !== undefined
                                        ? categoryDetails.categoryInfo.email
                                        : " fruitsvegetablescategory@fastgrocery.com"}
                                </a>
                                .
                            </p>
                            <p>
                                For general issues/ queries you can contact us
                                at{" "}
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
                        categoryTitle={
                            categoryDetails !== undefined
                                ? categoryDetails.title
                                : ""
                        }
                        categoryTitleSuffix="Products"
                    />

                    {/* Category Suggested Products */}
                    <CategoryProducts
                        products={suggestedProducts}
                        categoryTitle={
                            categoryDetails !== undefined
                                ? categoryDetails.title
                                : ""
                        }
                        categoryTitleSuffix="Suggested Products"
                    />
                </article>
            </main>
        </Layout>
    );
};

export default Category;
