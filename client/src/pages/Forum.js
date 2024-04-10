// src/pages/Forum.js
import React, { useState } from 'react';

const Forum = () => {
  // Example forum topics
  const [topics] = useState([
    { id: 1, title: 'HTML Basics', messages: 10 },
    { id: 2, title: 'CSS Fundamentals', messages: 7 },
    { id: 3, title: 'JavaScript Challenges', messages: 12 },
    // Add more topics as needed
  ]);

  return (
    <div>
      <h1>Forum</h1>
      <ul>
        {topics.map((topic) => (
          <li key={topic.id}>
            {topic.title} - {topic.messages} messages
            {/* Implement navigation to a detailed topic view here */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Forum;
