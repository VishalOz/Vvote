import React, { useState } from 'react';
import CreatePoll from './CreatePoll';
import VotePage from './VotePage';
import LiveResults from './LiveResults';
import './App.css';
import './index.css';

const App = () => {
  const [phase, setPhase] = useState('create');
  const [poll, setPoll] = useState({ question: "", options: [] });

  return (
    <div className="p-10 text-center">
      {phase === 'create' && (
        <CreatePoll 
          onStart={(pollData) => {
            setPoll(pollData);
            setPhase('vote');
          }}
        />
      )}
      {phase === 'vote' && <VotePage poll={poll} onFinish={() => setPhase('results')} />}
      {phase === 'results' && <LiveResults />}
    </div>
  );
};

export default App;
