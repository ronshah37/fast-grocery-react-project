import React, { useState } from "react";
import CategoryElement from "components/CategoryElement";

const CategoryList = ({ categories }) => {
    const categorySummary = categories.map((category) => (
        <CategoryElement key={category.id} data={category} />
    ));

    return (
        <div className="category-container">
            <header className="heading">
                <h1>Shop by Category</h1>
            </header>
            <div className="categories">{categorySummary}</div>
        </div>
    );
};

export default CategoryList;
