import React, { useState } from "react";
import Product from "components/Product";

const CategoryProducts = ({ products, categoryTitle, categoryTitleSuffix }) => {
    // console.log("Category input products", products);
    const [currPage, setCurrPage] = useState(1);
    const pageSize = 5;

    const startRow = (currPage - 1) * pageSize;
    const endRow = startRow + pageSize;
    const totalPages = Math.ceil(products.length / pageSize);

    const paginatedProducts = products.slice(startRow, endRow);

    const updatePage = (page) => {
        if (page < 0) setCurrPage(1);
        else if (page > totalPages) setCurrPage(totalPages);
        else setCurrPage(page);
    };

    const productSummary = paginatedProducts.map((product) => (
        <Product key={product.id} product={product} />
    ));

    return (
        <div id="Category" className="category">
            <header className="heading">
                <h2>
                    {categoryTitle} {categoryTitleSuffix}
                </h2>
            </header>
            <section id="CategoryProducts" className="results">
                {productSummary}
            </section>

            <nav aria-label="Pagination" className="pagination">
                <p id="numProducts">
                    <button
                        onClick={() => updatePage(currPage - 1)}
                        disabled={currPage === 1 ? `disabled` : ``}
                    >
                        <span className="material-icons">navigate_before</span>
                    </button>
                    Showing{" "}
                    {paginatedProducts.length === 1 ? `product` : `products`}{" "}
                    {startRow + 1} to {Math.min(endRow, products.length)} of{" "}
                    {products.length}
                    <button
                        onClick={() => updatePage(currPage + 1)}
                        disabled={currPage === totalPages ? `disabled` : ``}
                    >
                        <span className="material-icons">navigate_next</span>
                    </button>
                </p>
            </nav>
        </div>
    );
};

export default CategoryProducts;
