// src/components/VideoLesson.js
import React from 'react';

const VideoLesson = ({ src, title }) => {
  // Convert YouTube watch URL to embed URL
  // Example: Converts "https://www.youtube.com/watch?v=dQw4w9WgXcQ" to "https://www.youtube.com/embed/dQw4w9WgXcQ"
  const videoId = src.split('v=')[1];
  const embedUrl = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="video-lesson">
      <h2>{title}</h2>
      <iframe
        width="560"
        height="315"
        src={embedUrl}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoLesson;
