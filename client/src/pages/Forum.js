import React, { useState } from 'react';
import NewThreadForm from '../components/NewThreadForm';
import ReplyForm from '../components/ReplyForm';

// Mock Data
const initialThreads = [
  { id: 1, title: 'HTML Basics', replies: ['Reply 1', 'Reply 2'] },
  // Add more threads as needed
];

const Forum = () => {
  const [threads, setThreads] = useState(initialThreads);
  const [currentThreadId, setCurrentThreadId] = useState(null);

  const handleNewThread = (title) => {
    const newThread = { id: Date.now(), title, replies: [] };
    setThreads([...threads, newThread]);
  };

  const handleReply = (message) => {
    const updatedThreads = threads.map(thread =>
      thread.id === currentThreadId ? {...thread, replies: [...thread.replies, message]} : thread);
    setThreads(updatedThreads);
  };

  const renderThreads = () => (
    <ul>
      {threads.map((thread) => (
        <li key={thread.id} onClick={() => setCurrentThreadId(thread.id)}>
          {thread.title}
        </li>
      ))}
    </ul>
  );

  const renderThread = () => {
    const thread = threads.find((t) => t.id === currentThreadId);
    return (
      <div>
        <h3>{thread.title}</h3>
        {thread.replies.map((reply, index) => <p key={index}>{reply}</p>)}
        <ReplyForm onReply={handleReply} />
      </div>
    );
  };

  return (
    <div>
      <h1>Forum</h1>
      {!currentThreadId && (
        <>
          {renderThreads()}
          <NewThreadForm onNewThread={handleNewThread} />
        </>
      )}
      {currentThreadId && renderThread()}
    </div>
  );
};

export default Forum;
