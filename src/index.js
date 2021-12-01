import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Products from './components/products';
import Dashboard from './components/admin/dashboard';
import Posts from './components/posts';
import {BrowserRouter as Router, Routes, Route, Link, Navigate, Outlet}  from "react-router-dom";


ReactDOM.render(
  <Router>
    <Routes>

      {/* <Route path="/products" element={<Products/>} />
      <Route path="/admin" element={<Dashboard/>}  />
      <Route path="/posts" element={<Posts/>}  /> */}
      
      <Route path="/" element={<Home/>} />

      <Route path="learn" element={<Learn/>} >
        <Route path="courses" element={<Courses/>}  />
        <Route path="bundles" element={<Bundles/>}  />
      </Route>

  

    </Routes>
  </Router>

  ,document.getElementById('root')
);


function Learn()
{
  return( 
    <div>
          <h1 className="mb-4">React Routing Practice</h1>
          <Link to="/learn/courses" className="btn btn-success m-2">Courses</Link>
          <Link to="/learn/bundles" className="btn btn-primary m-2">Bundles</Link>
          <Outlet />
    </div>)

}


function Home()
{
  return <div>
    <h1>
      home
    </h1>
  </div>
}

function Courses()
{
  return <div>
    <h1>
      Courses
    </h1>
  </div>
}

function Bundles()
{
  return <div>
    <h1>
    Bundles
    </h1>
  </div>
}


reportWebVitals();
