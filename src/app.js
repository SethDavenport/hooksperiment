// @flow
import React, { useState, useCallback } from 'react';
import './app.css';
import { Counter } from './counter/index.js';

export const App = () => {
  const [showCounter, setShowCounter] = useState(true);
  const toggleCounter = useCallback(() => setShowCounter(!showCounter));

  return (
    <div className="App">
      { !!showCounter && <Counter title="I am a counter" /> }
      { showCounter }
      <button onClick={toggleCounter}>
        {
          showCounter ? 'Hide Counter' : 'Show Counter'
        }
      </button>
    </div>
  );
};
