// src/pages/TutorialsPage.js
import React from 'react';
import VideoLesson from '../components/VideoLesson';
import Tutorial from '../components/Tutorial';

const TutorialsPage = () => {
  // Example tutorial steps
  const tutorialSteps = [
    { title: 'Introduction to HTML', content: 'HTML is the standard markup language for Web pages.' },
    { title: 'Basic Tags', content: 'Learn about the basic HTML tags like <h1>, <p>, and <a>.' },
    // Add more steps according to your content
  ];

  // Example video lesson source
  const videoSrc = "path/to/your/tutorial-video.mp4";
  const videoTitle = "Learn Web Development";

  return (
    <div className="tutorials-page">
      <h1>Tutorials</h1>
      <VideoLesson src={videoSrc} title={videoTitle} />
      <Tutorial steps={tutorialSteps} />
    </div>
  );
};

export default TutorialsPage;
