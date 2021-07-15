import React, { useState } from "react";
import Product from "components/Product";
import { Divider } from "antd";

const RatingStars = ({ rating }) => {
    const fullStar = <span class="material-icons rating-star"> star </span>;
    const starBorder = (
        <span class="material-icons rating-star"> star_border </span>
    );
    const halfStar = (
        <span class="material-icons rating-star"> star_half </span>
    );
    let starsMap = new Map();

    function getStarArray(ratings) {
        let index = 0;
        let stars = [];

        if (starsMap.get(ratings) !== undefined) {
            //
            return starsMap.get(ratings);
            //
        } else {
            //
            if (Number.isInteger(ratings)) {
                //
                for (index = 0; index < ratings; index++) {
                    stars.push(fullStar);
                }
                //
            } else {
                //
                for (index = 0; index < Math.floor(ratings); index++) {
                    stars.push(fullStar);
                }
                stars.push(halfStar);
                //
            }

            for (index = stars.length; index < 5; index++) {
                stars.push(starBorder);
            }
            //
            let starArray = [...stars.values()];
            //
            starsMap.set(ratings, starArray);
            //
            return starArray;
        }
    }

    let ratingStars = getStarArray(rating);

    return <span>{ratingStars}</span>;
};

export default RatingStars;
