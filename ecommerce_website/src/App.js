import logo from './logo.svg';
import './App.css';
import {Products} from './Components/Products'
import { Routes, Route } from "react-router-dom";
import { Sorting } from './Components/Sort';
import { useSelector } from "react-redux";
import { Filter } from "./Components/Filter"
function App() {
  const { products } = useSelector((state) => state.products);
  return (
    <div className="App">
      <Sorting/>
      <Routes>
        <Route path="/" element={
          <Products />
        }
        />
        
        <Route path="/above" element={
          <Filter prod={products.filter((item) => Number(item.price.slice(2).replace(",", ""))>= 20000) } />
        } />
        <Route path="/below" element={
          <Filter prod={products.filter((item) => Number(item.price.slice(2).replace(",", ""))<= 20000) } />
        } />
         <Route path="/men" element={
          <Filter prod={products.filter((item) => item.type == "Men") } />
        } />
        <Route path="/women" element={
          <Filter prod={products.filter((item) => item.type == "Women") } />
        }/>
        </Routes>
    </div>
  );
}

export default App;
