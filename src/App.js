// import logo from "./logo.svg";
import "./App.css";
import CartPage from "./component/CartPage";
import Navbar from "./component/Navbar";
import ProductCart from "./component/ProductCart";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<ProductCart />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;
