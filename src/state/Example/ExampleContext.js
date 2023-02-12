import React, { createContext } from 'react';

export const initialExampleState = {
  state: { buttonHome: false, button1: false, button2: false, button3: false },
  setSate: () => null,
};

const ExampleContext = createContext(initialExampleState);
export default ExampleContext;
