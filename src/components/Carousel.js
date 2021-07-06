import React, { useState } from "react";
import Image from "components/Image";

const Carousel = ({ data }) => {
    const carouselSummary = data.map((slide) => (
        <Image
            src={slide.slideImagePath}
            alt={slide.slideImageAltText}
            className="slide"
            key={slide.id}
        />
    ));

    return (
        <div className="carousel" id="carousel">
            <div className="slides">{carouselSummary}</div>
            <div className="controls">
                <div className="control prev-slide">&#9668;</div>
                <div className="control next-slide">&#9658;</div>
            </div>
        </div>
    );
};

export default Carousel;
