import React, { useState } from "react";
import CategoryElement from "components/CategoryElement";

const CategoryList = ({ categories }) => {
    const categorySummary = categories.map((category) => (
        <CategoryElement key={category.id} data={category} />
    ));

    return (
        <div className="category-container">
            <h2 className="heading">Shop by Category</h2>
            <div className="categories">{categorySummary}</div>
        </div>
    );
};

export default CategoryList;
