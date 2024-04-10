import React, { useState } from 'react';
import VideoLesson from '../components/VideoLesson';
import Tutorial from '../components/Tutorial';
import tutorialTopics from '../data/tutorialTopics'; // Adjust if you store your tutorials data elsewhere

const TutorialsPage = () => {
  const [selectedTutorial, setSelectedTutorial] = useState(tutorialTopics[0]); // Default to the first tutorial

  // Function to handle tutorial selection, can be triggered by user action (e.g., clicking a tutorial title)
  const selectTutorial = (tutorialId) => {
    const tutorial = tutorialTopics.find(t => t.id === tutorialId);
    setSelectedTutorial(tutorial);
  };

  return (
    <div className="tutorials-page">
      <h1>Tutorials</h1>
      <div className="tutorial-list">
        {tutorialTopics.map((tutorial) => (
          <button key={tutorial.id} onClick={() => selectTutorial(tutorial.id)}>
            {tutorial.title}
          </button>
        ))}
      </div>
      {/* Display the selected tutorial */}
      <VideoLesson src={selectedTutorial.videoSrc} title={selectedTutorial.title} />
      <Tutorial steps={selectedTutorial.steps} />
    </div>
  );
};

export default TutorialsPage;
