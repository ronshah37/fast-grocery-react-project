import React, { useState } from "react";
import Layout from "components/Layout";
import CategoryList from "components/CategoryList";
import Carousel from "components/Carousel";
import FilterDetails from "components/FilterDetails";
import images from "components/images";

const Home = ({ categories, carousel }) => {
    return (
        <Layout>
            <Carousel data={carousel} />

            <CategoryList categories={categories} />

            <FilterDetails />

            <div className="foodnutrition-details">
                <h3 className="">
                    Search for Nutritional Values and learn more about your food
                </h3>
                <div>
                    <form id="foodNutritionForm">
                        <label htmlFor="foodname">Food name:</label>
                        <input
                            type="text"
                            id="foodname"
                            name="foodname"
                            placeholder="Ex. Apple, Banana, Paneer, etc."
                            maxLength="50"
                            size="25"
                        />
                        <br />
                        <br />
                        <input type="submit" value="Submit" />
                        <input
                            type="button"
                            onClick="resetFoodInfo()"
                            value="Clear All"
                        />
                    </form>

                    <div
                        id="foodNutritionDetails"
                        className="nutrition-summary"
                    ></div>
                </div>
            </div>

            <div className="special-offer-banner">
                <img
                    src={images.HPB}
                    alt="special offer"
                    className="special-offer-ad"
                />
                <div className="overlay">
                    <p className="special-offer-content">
                        Special Offer!! Hover to see it. Click to get it.
                    </p>
                </div>
            </div>

            <div className="notecard note">
                <p>
                    <strong>Did you know? </strong>
                    <span id="funFactValue"></span>
                    <input
                        type="button"
                        onClick="getFunFact()"
                        value="Refresh"
                    />
                </p>
            </div>
        </Layout>
    );
};

export default Home;
