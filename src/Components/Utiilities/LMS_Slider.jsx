import React, { useState, useEffect,useRef  } from "react";
import "./LogoSlider.css";

const logos = [
    "https://ik.imagekit.io/apps365/Apps365/LMS/LMS_Silder-image1.png",
    //   "https://ik.imagekit.io/zn4au2jftpm5/Apps365/LMS365/LMS-2_vu35j7r9Z.png",
    "https://ik.imagekit.io/apps365/Apps365/LMS/LP-lms2.png",
    "https://ik.imagekit.io/apps365/Apps365/LMS/LP_lms1.png",
    // "https://ik.imagekit.io/zn4au2jftpm5/Apps365/LMS365/LMS-5_2j1riAFkc.png",
];

const LMS_Slider = () => {
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

export default LMS_Slider;
