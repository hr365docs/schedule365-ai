import React from 'react';
import Lightbox from './Lightbox';
import CyberSecurity from './CyberSecurity';
import LogoSlider from './Slider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose, faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import { MyContext } from '../../App';
const logos = [
    'https://ik.imagekit.io/zn4au2jftpm5/hr365/soc_142hvt-qc.png',
    'https://ik.imagekit.io/zn4au2jftpm5/hr365/compliants_tM_PrC8N0Z.png',
    'https://ik.imagekit.io/zn4au2jftpm5/hr365/iso_D4yJ25IRn.png',
    'https://ik.imagekit.io/zn4au2jftpm5/hr365/microsoft_vdp9CYFMBj.png',
    'https://ik.imagekit.io/zn4au2jftpm5/hr365/Best%20ROI%201_96Mf_DosK.svg',
    'https://ik.imagekit.io/zn4au2jftpm5/hr365/medal%20(2)_JiluXJRGNl.svg',
    'https://ik.imagekit.io/zn4au2jftpm5/hr365/Best%20support%201_IGpX8xxqe3.svg',
    'https://ik.imagekit.io/zn4au2jftpm5/hr365/azure1_9hVzCGU2W.png',
    'https://ik.imagekit.io/zn4au2jftpm5/hr365/great-place_C3JVU5GXk.png'
];

const G2Badge = ({ heading, imageUrl, videoUrl, PageName }) => {
      const AppName = React.useContext(MyContext);
    const [isLightboxOpen, setLightboxOpen] = React.useState(false);
    const [selectedImageUrl, setSelectedImageUrl] = React.useState('');
    const [isVideoPlaying, setIsVideoPlaying] = React.useState(false);
    const openLightbox = (imageUrl) => {
        setSelectedImageUrl(imageUrl);
        setLightboxOpen(true);
    };

    const closeLightbox = () => {
        setLightboxOpen(false);
    };
    const getEmbedUrl = (url) => {
        if (url.includes('youtube.com/watch?v=')) {
            return url.replace('watch?v=', 'embed/');
        } else if (url.includes('youtu.be/')) {
            const videoId = url.split('youtu.be/')[1];
            return `https://www.youtube.com/embed/${videoId}`;
        } else if (url.includes('vimeo.com/')) {
            const videoId = url.split('vimeo.com/')[1];
            return `https://player.vimeo.com/video/${videoId}`;
        } else {
            return url; // fallback for direct video links
        }
    };
    const handlePlayClick = () => {
        setIsVideoPlaying(true); // When play icon is clicked, play the video
    };
    const handleCloseVideo = () => {
        setIsVideoPlaying(false); // Close the video
    };

    return (
        <>
            <div className='Badgesection' style={{ background: PageName == "ET365" ? "rgba(247, 247, 247, 0.41)" : "#fff", border: PageName == "ET365" ? "1px solid rgb(255, 255, 255)" : "#fff" }}>
                <h2 className='Badgeheading'>Trusted by 12,100+ deployments from 172 countries</h2>
                <div className='BadgeShoworHideDesktop'>
                    <div className='Hr_flex badgedistance '>
                        <div className='imgwidth'>
                            <img src="https://ik.imagekit.io/zn4au2jftpm5/hr365/soc_142hvt-qc.png" alt="logo" width="100%"
                                height="100%" />
                        </div>
                        <div className='imgwidth'>
                            <img src="https://ik.imagekit.io/zn4au2jftpm5/hr365/compliants_tM_PrC8N0Z.png" alt=" logo" width="100%"
                                height="100%" />
                        </div>
                        <div className='imgwidth'>
                            <img src="https://ik.imagekit.io/zn4au2jftpm5/hr365/iso_D4yJ25IRn.png" alt="logo" width="100%"
                                height="100%" />
                        </div>
                        <div className='imgwidth' id='imgrightborder'>
                            <img src="https://ik.imagekit.io/zn4au2jftpm5/hr365/microsoft_vdp9CYFMBj.png" alt="logo" width="100%"
                                height="100%" />
                        </div>
                        <div className='imgwidth'>
                            <img src="https://ik.imagekit.io/zn4au2jftpm5/hr365/Best%20ROI%201_96Mf_DosK.svg" alt="logo"
                                className='trustimg' />
                        </div>
                        <div className='imgwidth'>
                            <img src="https://ik.imagekit.io/zn4au2jftpm5/hr365/medal%20(2)_JiluXJRGNl.svg" alt="logo" className='trustimg' />
                        </div>
                        <div className='imgwidth' id='imgrightborder'>
                            <img src="https://ik.imagekit.io/zn4au2jftpm5/hr365/Best%20support%201_IGpX8xxqe3.svg" alt="logo" className='trustimg' />
                        </div>
                        {/* <div className='imgwidth' id='imgrightborder'>
                            <img src="https://ik.imagekit.io/zn4au2jftpm5/hr365/High%20Performer%201_L23PqEV-m.svg" alt="logo" className='trustimg' />
                        </div> */}
                        <div className='imgwidth'>
                            <img src="https://ik.imagekit.io/zn4au2jftpm5/hr365/azure1_9hVzCGU2W.png" alt="logo" className='trustimgazure' />
                        </div>
                        <div className="imgwidth">
                            <img
                                src={
                                    AppName === "Apps365"
                                        ? "https://ik.imagekit.io/apps365/Badges/Great-Place-To-Work.png?updatedAt=1759827837133"
                                        : "https://ik.imagekit.io/zn4au2jftpm5/hr365/Badges/Great-Place-To-Work_F8YXClgZl.png?updatedAt=1759830185421"
                                }
                                alt="Great Place To Work Badge"
                                className="trustimgLast"
                            />
                        </div>
                    </div>
                </div>
                <div className='BadgeShoworHideMobile'>
                    <div className='Hr_flex badgedistance '>
                        <div className='imgwidth'>
                            <img src="https://ik.imagekit.io/zn4au2jftpm5/hr365/soc_142hvt-qc.png" alt="logo" width="100%"
                                height="100%" />
                        </div>
                        <div className='imgwidth'>
                            <img src="https://ik.imagekit.io/zn4au2jftpm5/hr365/compliants_tM_PrC8N0Z.png" alt=" logo" width="100%"
                                height="100%" />
                        </div>
                        <div className='imgwidth'>
                            <img src="https://ik.imagekit.io/zn4au2jftpm5/hr365/iso_D4yJ25IRn.png" alt="logo" width="100%"
                                height="100%" />
                        </div>
                        <div className='imgwidth'>
                            <img src="https://ik.imagekit.io/zn4au2jftpm5/hr365/microsoft_vdp9CYFMBj.png" alt="logo" width="100%"
                                height="100%" />
                        </div>
                    </div>
                    <div className='Hr_flex badgedistance '>
                        <div className='imgwidth'>
                            <img src="https://ik.imagekit.io/zn4au2jftpm5/hr365/Best%20ROI%201_96Mf_DosK.svg" alt="logo"
                                className='trustimg' />
                        </div>
                        <div className='imgwidth'>
                            <img src="https://ik.imagekit.io/zn4au2jftpm5/hr365/medal%20(2)_JiluXJRGNl.svg" alt="logo" className='trustimg' />
                        </div>
                        <div className='imgwidth'>
                            <img src="https://ik.imagekit.io/zn4au2jftpm5/hr365/Best%20support%201_IGpX8xxqe3.svg" alt="logo" className='trustimg' />
                        </div>
                        {/* <div className='imgwidth'>
                            <img src="https://ik.imagekit.io/zn4au2jftpm5/hr365/High%20Performer%201_L23PqEV-m.svg" alt="logo" className='trustimg' />
                        </div> */}
                    </div>
                    <div className='Hr_flex badgedistance '>
                        <div className='imgwidth'>
                            <img src="https://ik.imagekit.io/zn4au2jftpm5/hr365/azure1_9hVzCGU2W.png" alt="logo" className='trustimgazure' />
                        </div>
                        <div className='imgwidth'>
                            <img src="https://ik.imagekit.io/zn4au2jftpm5/hr365/great-place_C3JVU5GXk.png" alt="logo" className='trustimgLast' />
                        </div>
                    </div>
                </div>
                <div>
                    <LogoSlider logos={logos} />
                </div>
            </div>

            {/* <div className='App_whitesectionG2'>
                <h2 className='HR_heading'>{heading}</h2>
                <div className='teamsmain HR_MT Hr_flex'>
                    <img
                        style={{ borderRadius: '1vw' }}
                        alt='Teams'
                        src={imageUrl}

                        onClick={() => openLightbox(imageUrl)}

                    />
                    <div className='videoplysectio'>
                        {videoUrl && !isVideoPlaying && (
                            <div
                                className='videoplayicon' */}
            {/* onClick={handlePlayClick}
                            > */}
            {/* <FontAwesomeIcon icon={faPlayCircle} className='videoicon' /> */}
            {/* <button class="play-button">
                                    <div class="play-icon"></div>
                                </button>
                            </div>
                        )}
                        {isVideoPlaying && videoUrl && (
                            <div className="video-overlay" onClick={handleCloseVideo}>
                                <div className="video-overlay-container" onClick={(e) => e.stopPropagation()}>
                                    <div className="video-close-btn" onClick={handleCloseVideo}>
                                        <FontAwesomeIcon icon={faClose} className="close-icon" />
                                    </div>
                                    <iframe
                                        className="videoiframe"
                                        src={getEmbedUrl(videoUrl)}
                                        title="Embedded Video"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                            </div>
                        )} */}



            {/* <Lightbox
                            isOpen={isLightboxOpen}
                            onClose={closeLightbox}
                            imageUrl={selectedImageUrl}
                        /> */}
            {/* </div> */}
            {/* //     </div> */}
            {/* // </div> */}

            {/* <div className='cybersection' >
                <CyberSecurity />
            </div> */}


        </>
    );
}

export default G2Badge;
