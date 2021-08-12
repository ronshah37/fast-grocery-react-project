import React from "react";
import Image from "components/Image";
import { Link } from "react-router-dom";

const CategoryElement = ({ data }) => {
    const { id, categoryPageURL, categoryImagePath, altDetailsImage, key } =
        data;

    return (
        <div className="category">
            <Link to={`/category/${id}`}>
                <Image src={categoryImagePath} alt={altDetailsImage} />
            </Link>
        </div>
    );
};

export default CategoryElement;
