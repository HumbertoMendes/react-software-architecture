import { useState } from 'react';
import { CounterContext } from './CounterContext';

export const CounterProvider = ({ children }) => {
  // Add states to the Context that is shared by multiple components.
	// So incrementBy and setIncrementBy should be handled in the component
  // that is leveraging CounterContext, not here
  const [numberOfClicks, setNumberOfClicks] = useState(0);
  // const [incrementBy, setIncrementBy] = useState(1);

  const increment = amount => {
    setNumberOfClicks(numberOfClicks + amount);
  };

  return (
    <CounterContext.Provider value={{ numberOfClicks, increment }}>
      {children}
    </CounterContext.Provider>
  );
}