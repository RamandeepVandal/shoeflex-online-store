import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
// screens
import { Homepage } from "./screens/Homepage";
import { Product } from "./screens/Product";
import { Cart } from "./screens/Cart";
import { Sneakers } from "./screens/Sneakers";
import { Designer } from "./screens/Designer";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="/sneakers" element={<Sneakers />} />
        <Route path="/designer" element={<Designer />} />
        <Route path="/product" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  )
}

export default App
