import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import worker from './mocks/browser';
import FormProvider from './context/FormContext';
import PostProvider from './context/PostContext';

worker.start();

ReactDOM.render(
  <React.StrictMode>
    <FormProvider>
      <PostProvider>
        <App />
      </PostProvider>
    </FormProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
