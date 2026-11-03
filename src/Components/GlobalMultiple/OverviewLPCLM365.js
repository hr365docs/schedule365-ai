import * as React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

import "swiper/css";
import "swiper/css/pagination";

function OverviewLPCLM365(props) {
    const videoUrl = "https://www.youtube.com/watch?v=jIfazWcHpwI";

    const [isVideoPlaying, setIsVideoPlaying] = React.useState(false);

    const images = props.images || [
        "https://ik.imagekit.io/apps365/Lp-pages/CLM-ai-image.png",
        "https://ik.imagekit.io/apps365/Lp-pages/CLM%202.webp",
        "https://ik.imagekit.io/apps365/Lp-pages/CLM%203.webp",
        "https://ik.imagekit.io/apps365/Lp-pages/CLM%206-%20OUTLOOK.webp",
        "https://ik.imagekit.io/apps365/Lp-pages/CLM%207.webp",
    ];

    const getEmbedUrl = (url) => {
        if (url.includes("youtube.com/watch?v=")) {
            return url.replace("watch?v=", "embed/");
        }

        if (url.includes("youtu.be/")) {
            const videoId = url.split("youtu.be/")[1];
            return `https://www.youtube.com/embed/${videoId}`;
        }

        return url;
    };

    return (
        <>
            <div
                style={{ padding: "3vw" }}
                className="overviewsection"
            >
                <h2 className="HR_heading">{props.MainHeading || "Contract Lifecycle Management Software in One Place – CLM 365"}</h2>
                {props.subHeading && (
                    <h2 style={{ margin: "0" }} className="HR_heading">{props.subHeading || "Contract Lifecycle Management Software in One Place – CLM 365"}</h2>
                )}
                <p>{props.MainDescription || "CLM 365 is AI-powered SharePoint Contract Management Software with Agentic AI, built inside the Microsoft 365 ecosystem to centralize contract workflows, automate approvals, and manage the complete contract lifecycle from request to reporting.  "}</p>


                <div className="CLMoverviewSliderWrapper">

                    <Swiper
                        modules={[Pagination, Autoplay]}
                        pagination={{
                            clickable: true,
                        }}
                        autoplay={{
                            delay: 4000,
                            disableOnInteraction: false,
                        }}
                        loop={true}
                        className="CLMoverviewSlider"
                    >
                        {images.map((image, index) => (
                            <SwiperSlide key={index}>
                                <div className="CLMoverviewSlide">
                                    <img
                                        src={image}
                                        alt={`CLM Screenshot ${index + 1}`}
                                        className="CLMoverviewImage"
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {!isVideoPlaying && (
                        <div
                            className="CLMoverviewPlayButtonWrapper"
                            onClick={() => setIsVideoPlaying(true)}
                        >
                            <button className="CLMoverviewPlayButton">
                                <div className="CLMoverviewPlayIcon"></div>
                            </button>
                        </div>
                    )}

                    {isVideoPlaying && (
                        <div
                            className="CLMVideoModalOverlay"
                            onClick={() => setIsVideoPlaying(false)}
                        >
                            <div
                                className="CLMVideoModal"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <button
                                    className="CLMVideoModalClose"
                                    onClick={() => setIsVideoPlaying(false)}
                                >
                                    ×
                                </button>

                                <iframe
                                    src={`${getEmbedUrl(videoUrl)}?autoplay=1`}
                                    title="CLM Demo Video"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className="CLMVideoIframe"
                                />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}

export default OverviewLPCLM365;