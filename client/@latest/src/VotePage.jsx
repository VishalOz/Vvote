import React from 'react'
import { socket } from './socket';

const VotePage = ({ poll, onFinish }) => {
    const handleVote = (option) => {
        socket.emit('vote', option);
        onFinish();
    };

  return (
    <div>
      <h2 className="text-2xl font-bold">
        {poll.question}
      </h2>
      {poll.options.map((opt, i) => (
        <button 
            key={i}
            className="block w-full bg-gray-200 my-2 py-2 rounded"
            onClick={() => handleVote(opt)}
        >
            {opt}
        </button>
      ))}
    </div>
  );
};

export default VotePage
