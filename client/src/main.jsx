import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import ShowContextProvider from './Context/ShowContext.jsx';
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
      <ShowContextProvider>
        <App />
      </ShowContextProvider>
    </BrowserRouter>
)
