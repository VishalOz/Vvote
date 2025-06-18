import { useState } from 'react'

const CreatePoll = ({ onStart }) => {
    const [ question, setQuestion ] = useState('');
    const [ option, setOption ] = useState('', '');

    const handleStart = () => {
        onStart({ question, options: option.filter(opt => opt)});
    };

  return (
    <div>
      <h2 className="text-2xl font-bold">Create Poll</h2>
      <input 
        className="border p-2 m-2"
        placeholder="Enter question"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
      />
      {options.map((opt, i) => {
        <input 
            key={i}
            className="border p-2 m-2"
            value={opt}
            onChange={ (e) => {
                const newOps = [...options];
                newOps[i] = e.target.value;
                setOptions(newOps);
            }}
        />
      })}
      <button 
      className="bg-blue-500 text-white px-4 py-2 m-2"
      onClick={() => setOptions([...options, ''])}
      >
        Add option
      </button>
      <button 
      className="bg-green-500 text-white px-4 py-2 m-2"
      onClick={handleStart}
      >
        Start poll
      </button>
    </div>
  );
};

export default CreatePoll;
