
import './App.css';
import {Route, Routes, Switch} from "react-router-dom"
import NavBar from "./components/navbar";
import Products from "./components/products";
import Dashboard from "./components/admin/dashboard";
import Posts from "./components/posts";
import Home from './components/home';

function App() {
  return (
    <div>
    {/* <NavBar/>
    <div className="content">
    <Routes>
      <Route path="/products" component={Products}  />
      <Route path="/admin" component={Dashboard}  />
      <Route path="/posts" component={Posts}  />
      <Route path="/" component={Home}  />
    </Routes>
    </div> */}
    </div>
  );
}

export default App;
