import * as React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose, faPlayCircle } from '@fortawesome/free-solid-svg-icons';
function OverviewCommon(props) {
  const videoUrl = "https://www.youtube.com/watch?v=jIfazWcHpwI";
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
      
        <h2 className="HR_heading">{props.MainHeading || "Contract Lifecycle Management Software in One Place – CLM 365"}</h2>
        <p>{props.MainDescription || "Our contract lifecycle management software uses AI to simplify contract creation, integrating seamlessly with Teams, SharePoint, and Outlook to enhance efficiency."}</p>
       <div style={{position:"relative"}}>
        <img
              alt={props.MainImageAlt || "Helpdesk 365"}
              src={props.MainImageSrc || "https://ik.imagekit.io/zn4au2jftpm5/Apps365/Teams/CLM%20365%20teams_yFI8NzGjap.png?updatedAt=1725450649581"}
               
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
