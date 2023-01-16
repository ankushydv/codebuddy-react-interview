import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import worker from './mocks/browser';
import FormProvider from './context/FormContext';

worker.start();

ReactDOM.render(
  <React.StrictMode>
    <FormProvider>
      <App />
    </FormProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
