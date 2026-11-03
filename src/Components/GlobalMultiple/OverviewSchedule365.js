import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

function OverviewSchedule365(props) {
  const videoUrl = props.videoUrl || "https://youtu.be/KTLztBbqNnM";
  const [isVideoPlaying, setIsVideoPlaying] = React.useState(false);

  const getEmbedUrl = (url) => {
    if (!url) return "";
    let embed = "";
    if (url.includes("youtube.com/watch?v=")) {
      embed = url.replace("watch?v=", "embed/");
    } else if (url.includes("youtu.be/")) {
      const videoId = url.split("youtu.be/")[1]?.split("?")[0];
      embed = `https://www.youtube.com/embed/${videoId}`;
    } else if (url.includes("vimeo.com/")) {
      const videoId = url.split("vimeo.com/")[1]?.split("?")[0];
      embed = `https://player.vimeo.com/video/${videoId}`;
    } else {
      embed = url;
    }
    // Autoplay when opened
    return embed.includes("?") ? `${embed}&autoplay=1` : `${embed}?autoplay=1`;
  };

  const handlePlayClick = () => {
    setIsVideoPlaying(true);
  };

  const handleCloseVideo = () => {
    setIsVideoPlaying(false);
  };

  return (
    <div style={{ padding: "3vw" }} className="overviewsection">
      <h2 className="HR_heading">
        {props.MainHeading ||
          "Microsoft 365 Meeting Scheduling — MS Teams, Outlook, Copilot & Agentic AI Built into Schedule 365"}
      </h2>
      <p>
        {props.MainDescription ||
          "Track, coordinate, and orchestrate your meetings effortlessly with our AI-powered Microsoft 365 scheduling system. With automated workflows and intelligent conflict resolution, calendar management is streamlined, letting your teams focus on high-impact conversations."}
      </p>

      <div style={{ position: "relative" }}>
        <img
          alt={props.MainImageAlt || "Schedule 365"}
          src={
            props.MainImageSrc ||
            "https://ik.imagekit.io/zn4au2jftpm5/Apps365/Teams/image%20(8)_Do7TgjeZV9.png"
          }
        />

        <div className="videoplysectio">
          {videoUrl && !isVideoPlaying && (
            <div
              className="videoplayicon"
              onClick={handlePlayClick}
              role="button"
              tabIndex={0}
            >
              <button className="play-button" aria-label="Play video">
                <div className="play-icon"></div>
              </button>
            </div>
          )}

          {isVideoPlaying && videoUrl && (
            <div className="video-overlay" onClick={handleCloseVideo}>
              <div
                className="video-overlay-container"
                onClick={(e) => e.stopPropagation()}
              >
                <div
                  className="video-close-btn"
                  onClick={handleCloseVideo}
                  role="button"
                  tabIndex={0}
                  aria-label="Close video"
                >
                  <FontAwesomeIcon icon={faClose} className="close-icon" />
                </div>
                <iframe
                  className="videoiframe"
                  src={getEmbedUrl(videoUrl)}
                  title="Schedule 365 Overview Video"
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
  );
}

export default OverviewSchedule365;