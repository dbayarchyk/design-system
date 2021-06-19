import React from 'react';

import { MyHeadline, MyBody, MyStack, MyButton } from '@dbayarchyk/design-system-components-react';

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <MyStack space="l">
          <MyHeadline level="1">Hello There!</MyHeadline>
          <MyBody>
            Edit <code>src/App.tsx</code> and save to reload.
          </MyBody>
          <MyButton variant="primary" text="Hello" />
          <MyButton variant="secondary" text="Hello" /> 
          <MyButton variant="tertiary" text="Hello" /> 
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </MyStack>
      </header>
    </div>
  );
}

export default App;
