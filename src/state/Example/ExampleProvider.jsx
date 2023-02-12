import React, { useState, useEffect } from 'react';
import ExampleContext, { initialExampleState } from './ExampleContext';
import { useLocation } from 'react-router-dom';

export const ExampleProvider = ({ children }) => {
  const [example, setExample] = useState(initialExampleState.state);

  const location = useLocation();

  useEffect(() => {
    switch (location.pathname) {
      case '/promos-ropa':
        setExample({
          buttonHome: true,
          button1: false,
          button2: false,
          button3: false,
        });
        break;
      case '/page-fav':
        setExample({
          buttonHome: false,
          button1: true,
          button2: false,
          button3: false,
        });
        break;
      case '/page-two':
        setExample({
          buttonHome: false,
          button1: false,
          button2: true,
          button3: false,
        });
        break;
      case '/page-three':
        setExample({
          buttonHome: false,
          button1: false,
          button2: false,
          button3: true,
        });
        break;
    }
  }, [location.pathname]);

  return (
    <ExampleContext.Provider value={{ example, setExample }}>
      {children}
    </ExampleContext.Provider>
  );
};