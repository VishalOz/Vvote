import { useState, useEffect } from 'react';
import { socket } from './socket';

const LiveResults = () => {
  const [votes, setVotes] = useState({});

  useEffect(() => {
    socket.on('updateVotes', (data) => {
      setVotes(data);
    });

    // Cleanup on unmount
    return () => {
      socket.off('updateVotes');
    };
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold">Live Results</h2>
      {Object.entries(votes).map(([opt, count]) => (
        <div key={opt} className="my-2">
          <strong>{opt}:</strong> {count}
        </div>
      ))}
    </div>
  );
};

export default LiveResults;
