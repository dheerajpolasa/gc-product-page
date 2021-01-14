import React, { useState } from 'react';

import '../styles/imagesection.css';

function ImageSection() {
    const [displayImage, setDisplayImage] = useState(
        'https://static.zara.net/photos///2021/V/0/2/p/0387/401/400/2/w/810/0387401400_2_3_1.jpg?ts=1605867999683'
    );
    const [images, setImages] = useState([
        'https://static.zara.net/photos///2021/V/0/2/p/0387/401/400/2/w/810/0387401400_2_3_1.jpg?ts=1605867999683',
        'https://static.zara.net/photos///2021/V/0/2/p/0387/401/400/2/w/810/0387401400_2_1_1.jpg?ts=1605867992183',
        'https://static.zara.net/photos///2021/V/0/2/p/0387/401/400/2/w/810/0387401400_6_1_1.jpg?ts=1605865463058',
    ]);

    const setImage = (event) => {
        console.log(event.target.currentSrc);
        setDisplayImage(event.target.currentSrc);
    };

    return (
        <div className="imagesection">
            <div className="imagesection__displayImage">
                <img src={displayImage} />
            </div>
            <div className="imagesection__images">
                {images.map((image) => (
                    <img src={image} onClick={setImage} />
                ))}
            </div>
        </div>
    );
}

export default ImageSection;
