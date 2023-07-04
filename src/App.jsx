import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
// screens
import { Homepage } from "./screens/Homepage";
import { Products } from "./screens/Products";
import { Product } from "./screens/Product";
import { Cart } from "./screens/Cart";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/products" element={<Products />} />
        <Route exact path="/product" element={<Product />} />
        <Route exact path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  )
}

export default App
