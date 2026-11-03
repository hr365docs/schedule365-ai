import React, { useState, useEffect, useRef } from "react";
import "./LogoSlider.css";

const logos = [
    "https://ik.imagekit.io/apps365/Lp-pages/CLM%201.webp",
    "https://ik.imagekit.io/apps365/Lp-pages/CLM%202.webp",
    "https://ik.imagekit.io/apps365/Lp-pages/CLM%203.webp",
    "https://ik.imagekit.io/apps365/Lp-pages/CLM%204.webp",
    "https://ik.imagekit.io/apps365/Lp-pages/CLM%205.webp",
    "https://ik.imagekit.io/apps365/Lp-pages/CLM%206-%20OUTLOOK.webp",
    "https://ik.imagekit.io/apps365/Lp-pages/CLM%207.webp",
];

const CLM365logoslider = () => {
    const [index, setIndex] = useState(0);
    const intervalRef = useRef(null);
    const startSlider = () => {
        intervalRef.current = setInterval(() => {
            setIndex((prev) => (prev + 1) % logos.length);
        }, 3000);
    };

    const stopSlider = () => clearInterval(intervalRef.current);

    useEffect(() => {
        startSlider();
        return () => stopSlider();
    }, []);

    return (
        <>
            <div style={{ position: "relative" }}>
                <div className="slider-wrapper">
                    <div
                        className="slider-container"
                        onMouseEnter={stopSlider}
                        onMouseLeave={startSlider}
                    >
                        <div
                            className="slider-track"
                            style={{
                                transform: `translateX(-${index * 100}%)`,
                            }}
                        >
                            {logos.map((logo, i) => (
                                <div className="slide_LMS" key={i}>
                                    <img src={logo} alt={`slide-${i}`} />
                                </div>
                            ))}
                        </div>

                        {/* Navigation Dots */}
                        <div className="dots-container">
                            {logos.map((_, i) => (
                                <div
                                    key={i}
                                    className={`dot ${i === index ? "active" : ""}`}
                                    onClick={() => setIndex(i)}
                                ></div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="FeatureIDStyles" id="Features"></div>
        </>
    );
};

export default CLM365logoslider;
