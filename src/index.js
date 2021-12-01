import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router, Routes, Route}  from "react-router-dom";
import Products from './components/products';
import Dashboard from './components/admin/dashboard';
import Posts from './components/posts';


ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/products" element={<Products/>} />
      <Route path="/admin" element={<Dashboard/>}  />
      <Route path="/posts" element={<Posts/>}  />
    </Routes>
  </Router>
  
  ,document.getElementById('root')
);



function Home()
{
  return <div>
    <h1>
      home
    </h1>
  </div>
}

reportWebVitals();
