import React, { useState, useEffect } from 'react';
import { AlertCircle } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

const BatcomputerX = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const [command, setCommand] = useState('');
  const [response, setResponse] = useState('');
  const [attempts, setAttempts] = useState(0);

  const authenticate = () => {
    if (command === 'HAL Open the bay doors') {
      setAuthenticated(true);
      setResponse('Authentication successful. Welcome, BATDAN.');
    } else {
      setAttempts(prev => prev + 1);
      setResponse('I\'m Sorry BATDAN I can\'t open door');
    }
  };

  useEffect(() => {
    if (attempts >= 3) {
      setResponse('Maximum attempts exceeded. System lockdown initiated.');
    }
  }, [attempts]);

  return (
    <div className='min-h-screen bg-black text-amber-400 p-6'>
      <div className='max-w-4xl mx-auto space-y-6'>
        <h1 className='text-4xl font-bold tracking-tighter typing-effect'>
          ULTIMATE BATCOMPUTER X
        </h1>
        
        <div className='relative'>
          <div className='h-1 bg-amber-400/20 animate-scanning' />
        </div>

        {!authenticated ? (
          <Alert className='border-amber-400 bg-black'>
            <AlertCircle className='h-4 w-4' />
            <AlertTitle>Security Protocol Active</AlertTitle>
            <AlertDescription>
              Authentication required. Please enter command sequence.
            </AlertDescription>
          </Alert>
        ) : null}

        <div className='space-y-4'>
          <input
            type='text'
            value={command}
            onChange={(e) => setCommand(e.target.value)}
            className='w-full bg-black border-2 border-amber-400 p-2 text-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400'
            placeholder='Enter command...'
          />

          <button
            onClick={authenticate}
            className='w-full bg-amber-400 text-black font-bold py-2 px-4 hover:bg-amber-500 transition-colors pulse'
          >
            Execute Command
          </button>
        </div>

        {response && (
          <pre className='bg-black/50 border border-amber-400 p-4 rounded text-glow'>
            BatcomputerX&gt; {response}
          </pre>
        )}
      </div>
    </div>
  );
};

export default BatcomputerX;
