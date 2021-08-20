import React, { useState } from "react";
import ProductList from "components/ProductList";

const FilterResults = ({ result }) => {
    const [currPage, setCurrPage] = useState(1);
    const pageSize = 5;

    const startRow = (currPage - 1) * pageSize;
    const endRow = startRow + pageSize;
    const totalPages = Math.ceil(result.length / pageSize);

    const paginatedProducts = result.slice(startRow, endRow);

    const updatePage = (page) => {
        if (page < 0) setCurrPage(1);
        else if (page > totalPages) setCurrPage(totalPages);
        else setCurrPage(page);
    };

    return (
        <div className="filter-results">
            <ProductList products={paginatedProducts} />
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
                    {startRow + 1} to {Math.min(endRow, result.length)} of{" "}
                    {result.length}
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

export default FilterResults;
