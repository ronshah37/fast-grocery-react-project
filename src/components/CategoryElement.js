import React from "react";
import Image from "components/Image";

const CategoryElement = ({ data }) => {
    const { categoryPageURL, categoryImagePath, altDetailsImage, key } = data;

    return (
        <div className="category">
            <a href={categoryPageURL}>
                <Image src={categoryImagePath} alt={altDetailsImage} />
            </a>
        </div>
    );
};

export default CategoryElement;
