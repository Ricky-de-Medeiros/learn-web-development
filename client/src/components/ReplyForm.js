import React, { useState } from 'react';

const ReplyForm = ({ onReply }) => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onReply(message);
    setMessage('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        placeholder="Write your reply..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
      ></textarea>
      <button type="submit">Post Reply</button>
    </form>
  );
};

export default ReplyForm;
