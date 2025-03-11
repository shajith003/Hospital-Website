import React, { useState, useEffect } from "react";
import "./ImageSlider.css";

const images = [
    "https://imgs.search.brave.com/ui7qB5LfKtgs59MCwsLP_XjNmrtT3nCn83gdeqoobmY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTYz/MzU3NzAzL3Bob3Rv/L2RlbnRpc3Qtb2Zm/aWNlLmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz1IcF8xd1hE/X0tiU2RJT1FhX1J6/YWtUbm9jTW9jZ3Fa/MmtLR1htUXpKTlNB/PQ",
    "https://via.placeholder.com/800x400?text=Hospital+Image+2",
    "https://via.placeholder.com/800x400?text=Hospital+Image+3"
];

const ImageSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="slider-container">
            <img src={images[currentIndex]} alt="Clinic Display" className="slider-image" />
            <div className="dots">
                {images.map((_, index) => (
                    <span key={index} className={index === currentIndex ? "dot active" : "dot"}></span>
                ))}
            </div>
        </div>
    );
};

export default ImageSlider;
