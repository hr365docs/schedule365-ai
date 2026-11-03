import React from 'react';

const YouTubeEmbed = ({ videoId }) => {
  return (
    <div className="pmvideo">
      
      <iframe
      className='videostyle'
        // width="80%"
        // height="400"
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default YouTubeEmbed;
