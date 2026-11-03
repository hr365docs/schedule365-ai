import * as React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose, faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import CyberSecurity from "../Utiilities/CyberSecurity";
import DemoButtons from "../Utiilities/DemoButtons";
import LMS_Slider from "../Utiilities/LMS_Slider";
import AssetLogoslider from "../Utiilities/AssetLogoslider";
import EmployeeDirectorylogoSlider from "../Utiilities/EmployeeDirectorylogoSlider";
import HelpdesklogoSlider from "../Utiilities/HelpdesklogoSlider";
import CLM365logoslider from "../Utiilities/CLM365logoslider";
function OverviewCLM365(props) {
    const videoUrl = "https://youtu.be/AcJ9d1S6Ong";
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
            <div style={{ background: "none" }} className="overviewsection ETOverViewSection" >
                <h2 className="HR_heading" style={{ marginBottom: "0vw", color: "#333" }}>Built to Simplify Contract Management Across Departments</h2>
                <p style={{ margin: "0",marginBottom:"0.5vw" }}>CLM 365 helps organizations review contracts faster with AI, automate approvals, track obligations, and ensure compliance — all within Microsoft 365.
                </p>
                <p style={{ margin: "0",marginBottom:"1vw" }}>From creation and negotiation to renewals and secure storage, every contract stays organized, searchable, and easy to manage throughout its lifecycle
                </p>

            

                <div style={{ margin: "1vw 0vw", display: "flex", justifyContent: "center", marginBottom: "1vw" }}>
                    <DemoButtons LMS365="LMS365" demobtnText="Explore CLM 365" />
                </div>
                <div>
                    <CLM365logoslider />
                </div>

            </div>

        </>
    );
}

export default OverviewCLM365;
