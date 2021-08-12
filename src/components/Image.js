import React, { useState } from "react";

const Image = ({ src, alt, ...attr }) => {
    // State will hold the image url
    const [img, setImg] = useState(``);

    if (src) {
        import(`img/${src}`).then((image) => setImg(image.default));
    }
    
    // return <img src={img ? img : noImg} alt={alt} {...attr} />;
    return <img src={img} alt={alt} {...attr} />;
};

export default Image;
