// src/components/VideoLesson.js
import React from 'react';

const VideoLesson = ({ src, title }) => {
  return (
    <div className="video-lesson">
      <h2>{title}</h2>
      <video controls src={"https://youtu.be/bMknfKXIFA8?si=eqQqm6UY80fZ-4t1"} />
    </div>
  );
};

export default VideoLesson;
