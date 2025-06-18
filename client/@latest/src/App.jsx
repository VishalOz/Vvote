import React from 'react'
import createPoll from './createPoll';
import VotePage from './VotePage';
import LiveResults from './LiveResults';
import { useState } from 'react'
import './App.css'
import './index.css'

const App = () => {
  const [phase, setPhase ] = useState('create');
  const [poll, setPoll ] = useState({ question: "", option: [] });
  return (
    <div className="p-10 text-center">
      {phase === 'create' && (
        <createPoll 
          onStart={(pollData) => {
            setPoll(pollData);
            setPhase('vote');
          }}
        />
      )}
      {phase === 'vote' && <VotePage poll={poll} onFinish={() => setPhase('results')}/>}
      {phase === 'results' && <LiveResults />}
    </div>
  );
};

export default App;
