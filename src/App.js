import logo from './logo.svg';
import './App.css';
import {Route} from "react-router-dom"

function App() {
  return (
    <div>
    <NavBar/>
    <div className="content">
      <ul>
        <li><a href="" >Home</a></li>
        <li><a href="" >Products</a></li>
        <li><a href="" >Posts</a></li>
        <li><a href="" >Admin</a></li>
      </ul>
    </div>
    </div>
  );
}

export default App;
