import React from 'react';
import { createRoot } from 'react-dom/client';
import Hello from './components/Hello';
import Name from './components/Name';
import Message from './components/Message';
import reportWebVitals from './reportWebVitals';

const container = document.getElementById('root');
const root = createRoot(container!);
console.log(root)

root.render(
  <React.StrictMode>
    <Hello />
    <Name />
    <Message />
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
