import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './Components/App/App';
import Ratings from './Components/Ratings/Ratings';
import reportWebVitals from './reportWebVitals';

render(
  <BrowserRouter>
    <App />
    <Routes>
          <Route path='ratings' element={<Ratings />}></Route>
        </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
