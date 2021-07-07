import React, { useState } from "react";
import ProductList from "components/ProductList";

const FilterResults = ({ result }) => {
    return (
        <div className="filter-results">
            <ProductList products={result} />
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
    );
};

export default FilterResults;
