import * as React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose, faPlayCircle } from '@fortawesome/free-solid-svg-icons';
function OverviewCommon(props) {
  const videoUrl = "https://youtu.be/xws3smox6p4";
   const [isLightboxOpen, setLightboxOpen] = React.useState(false);
      const [selectedImageUrl, setSelectedImageUrl] = React.useState('');
      const [isVideoPlaying, setIsVideoPlaying] = React.useState(false);
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
    <div style={{padding:'3vw'}} className="overviewsection">
        <h2 className="HR_heading">{props.MainHeading || "Experience the Perfect Blend of AI Smarts and Human Care with Help Desk 365"}</h2>
        <p>{props.MainDescription || "Get the best of AI smart and human touch—deliver happiness right out of the box. Our SharePoint ticketing system gets you going fast with simplified workflows that let your employees glide through tasks effortlessly. As well as you can use our Help desk software easily within Microsoft 365 apps like Teams, Outlook, and SharePoint. "}</p>
        <div style={{position:"relative"}}>
        <img
              alt={props.MainImageAlt || "Helpdesk 365"}
              src={props.MainImageSrc || "https://ik.imagekit.io/zn4au2jftpm5/hr365/HDP_Regular/Screenshot-of-helpdesk_xKl_oVJiI.png"}
               
            />
              <div className='videoplysectio'>
            {videoUrl && !isVideoPlaying && (
              <div
                className='videoplayicon'
                onClick={handlePlayClick} // Only trigger video play when clicked
              >
                {/* <FontAwesomeIcon icon={faPlayCircle} className='videoicon' /> */}
                <button class="play-button">
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
            )}

          </div>
        </div>
            
    </div>

    </>
  );
}

export default OverviewCommon;
