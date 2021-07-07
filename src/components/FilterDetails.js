import React, { useState } from "react";
import FilterResults from "components/FilterResults";

const FilterDetails = ({ products }) => {
    const [filterState, setFilterState] = useState({
        deliveryTypes: [],
        discounts: [],
        ratings: 0,
    });

    const filteredProducts = products
        .filter(
            (product) =>
                filterState.deliveryTypes.length === 0 ||
                product.deliveryTypes.filter((deliveryType) =>
                    filterState.deliveryTypes.includes(deliveryType)
                ).length > 0
        )
        .filter(
            (product) =>
                filterState.discounts.length === 0 ||
                product.discount.filter((discount) =>
                    filterState.discounts.includes(discount)
                ).length > 0
        )
        .filter((product) => product.rating >= filterState.ratings);

    const handleDeliveryChange = ({ target }) => {
        // When a check or uncheck a checkbox, add/remove the "value" from the Array

        if (target.checked) {
            setFilterState({
                ...filterState,
                courses: [...filterState.deliveryTypes, target.value],
            });
        } else {
            setFilterState({
                ...filterState,
                courses: filterState.deliveryTypes.filter(
                    (deliveryType) => deliveryType !== target.value
                ),
            });
        }
    };

    console.log("filteredProducts", filteredProducts);

    return (
        <div className="filter-details">
            <h2 className="">Filter By</h2>
            <div className="products-filter">
                <div className="filter-sidebar">
                    <form className="filters">
                        <div className="filter-options">
                            <fieldset
                                id="deliveryTypeFilter"
                                className="filter-item"
                                onChange={handleDeliveryChange}
                            >
                                <legend>Delivery Type</legend>
                                <ul className="filter-list">
                                    <li>
                                        <label
                                            htmlFor="two_hours"
                                            className="checkbox"
                                        >
                                            <input
                                                type="checkbox"
                                                name="delivery"
                                                value="two_hours"
                                                id="two_hours"
                                            />
                                            <span>2 Hours Super Delivery</span>
                                        </label>
                                    </li>
                                    <li>
                                        <label
                                            htmlFor="one_day"
                                            className="checkbox"
                                        >
                                            <input
                                                type="checkbox"
                                                name="delivery"
                                                value="one_day"
                                                id="one_day"
                                            />
                                            <span>1 Day Delivery</span>
                                        </label>
                                    </li>
                                    <li>
                                        <label
                                            htmlFor="two_days"
                                            className="checkbox"
                                        >
                                            <input
                                                type="checkbox"
                                                name="delivery"
                                                value="two_days"
                                                id="two_days"
                                            />
                                            <span>2 Days Delivery</span>
                                        </label>
                                    </li>
                                </ul>
                            </fieldset>
                            <fieldset
                                id="discountsFilter"
                                className="filter-item"
                            >
                                <legend>Discounts</legend>
                                <ol className="filter-list">
                                    <li>
                                        <label
                                            htmlFor="ten_percent"
                                            className="checkbox"
                                        >
                                            <input
                                                type="checkbox"
                                                name="offers"
                                                value="ten_percent"
                                                id="ten_percent"
                                            />
                                            <span> 10% </span>
                                        </label>
                                    </li>
                                    <li>
                                        <label
                                            htmlFor="twenty_percent"
                                            className="checkbox"
                                        >
                                            <input
                                                type="checkbox"
                                                name="offers"
                                                value="twenty_percent"
                                                id="twenty_percent"
                                            />
                                            <span>20%</span>
                                        </label>
                                    </li>
                                    <li>
                                        <label
                                            htmlFor="thirty_percent"
                                            className="checkbox"
                                        >
                                            <input
                                                type="checkbox"
                                                name="offers"
                                                value="thirty_percent"
                                                id="thirty_percent"
                                            />
                                            <span>30%</span>
                                        </label>
                                    </li>
                                    <li>
                                        <label
                                            htmlFor="forty_percent"
                                            className="checkbox"
                                        >
                                            <input
                                                type="checkbox"
                                                name="offers"
                                                value="forty_percent"
                                                id="forty_percent"
                                            />
                                            <span>40%</span>
                                        </label>
                                    </li>
                                    <li>
                                        <label
                                            htmlFor="fifty_percent"
                                            className="checkbox"
                                        >
                                            <input
                                                type="checkbox"
                                                name="offers"
                                                value="fifty_percent"
                                                id="fifty_percent"
                                            />
                                            <span>50%</span>
                                        </label>
                                    </li>
                                </ol>
                            </fieldset>
                            <fieldset
                                id="ratingsFilter"
                                className="filter-item"
                            >
                                <legend>Ratings</legend>
                                <ol className="filter-list">
                                    <li>
                                        <label
                                            htmlFor="aboveFour"
                                            className="radiobtn"
                                        >
                                            <input
                                                type="radio"
                                                name="rating"
                                                value="4"
                                                id="aboveFour"
                                            />
                                            <span
                                                className="
                                                        material-icons
                                                        rating-star
                                                    "
                                            >
                                                star
                                            </span>
                                            <span
                                                className="
                                                        material-icons
                                                        rating-star
                                                    "
                                            >
                                                star
                                            </span>
                                            <span
                                                className="
                                                        material-icons
                                                        rating-star
                                                    "
                                            >
                                                star
                                            </span>
                                            <span
                                                className="
                                                        material-icons
                                                        rating-star
                                                    "
                                            >
                                                star
                                            </span>
                                            <span
                                                className="
                                                        material-icons
                                                        rating-star
                                                    "
                                            >
                                                star_border
                                            </span>
                                        </label>
                                    </li>
                                    <li>
                                        <input
                                            type="radio"
                                            name="rating"
                                            value="3"
                                            id="aboveThree"
                                        />
                                        <label htmlFor="aboveThree">
                                            <span
                                                className="
                                                        material-icons
                                                        rating-star
                                                    "
                                            >
                                                star
                                            </span>
                                            <span
                                                className="
                                                        material-icons
                                                        rating-star
                                                    "
                                            >
                                                star
                                            </span>
                                            <span
                                                className="
                                                        material-icons
                                                        rating-star
                                                    "
                                            >
                                                star
                                            </span>
                                            <span
                                                className="
                                                        material-icons
                                                        rating-star
                                                    "
                                            >
                                                star_border
                                            </span>
                                            <span
                                                className="
                                                        material-icons
                                                        rating-star
                                                    "
                                            >
                                                star_border
                                            </span>
                                        </label>
                                    </li>
                                    <li>
                                        <input
                                            type="radio"
                                            name="rating"
                                            value="2"
                                            id="aboveTwo"
                                        />
                                        <label htmlFor="aboveTwo">
                                            <span
                                                className="
                                                        material-icons
                                                        rating-star
                                                    "
                                            >
                                                star
                                            </span>
                                            <span
                                                className="
                                                        material-icons
                                                        rating-star
                                                    "
                                            >
                                                star
                                            </span>
                                            <span
                                                className="
                                                        material-icons
                                                        rating-star
                                                    "
                                            >
                                                star_border
                                            </span>
                                            <span
                                                className="
                                                        material-icons
                                                        rating-star
                                                    "
                                            >
                                                star_border
                                            </span>
                                            <span
                                                className="
                                                        material-icons
                                                        rating-star
                                                    "
                                            >
                                                star_border
                                            </span>
                                        </label>
                                    </li>
                                    <li>
                                        <input
                                            type="radio"
                                            name="rating"
                                            value="1"
                                            id="aboveOne"
                                        />
                                        <label htmlFor="aboveOne">
                                            <span
                                                className="
                                                        material-icons
                                                        rating-star
                                                    "
                                            >
                                                star
                                            </span>
                                            <span
                                                className="
                                                        material-icons
                                                        rating-star
                                                    "
                                            >
                                                star_border
                                            </span>
                                            <span
                                                className="
                                                        material-icons
                                                        rating-star
                                                    "
                                            >
                                                star_border
                                            </span>
                                            <span
                                                className="
                                                        material-icons
                                                        rating-star
                                                    "
                                            >
                                                star_border
                                            </span>
                                            <span
                                                className="
                                                        material-icons
                                                        rating-star
                                                    "
                                            >
                                                star_border
                                            </span>
                                        </label>
                                    </li>
                                </ol>
                            </fieldset>
                            <fieldset id="sortFilter" className="filter-item">
                                <legend>Sort</legend>
                                <label htmlFor="sort">Show</label>
                                <select
                                    className="dropdown"
                                    name="sort"
                                    id="sort"
                                >
                                    <option value="">
                                        --Please choose an option--
                                    </option>
                                    <option value="price-high">
                                        Price, highest to lowest
                                    </option>
                                    <option value="price-low">
                                        Price, lowest to highest
                                    </option>
                                </select>
                            </fieldset>
                        </div>
                    </form>
                </div>
            </div>
            <h2 className="">Filter Results</h2>
            <FilterResults result={filteredProducts} />
        </div>
    );
};

export default FilterDetails;
