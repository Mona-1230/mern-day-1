import { Route, Routes, useLocation } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import Products from "./components/Products";
import ProductDetail from "./components/ProductDetail";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const location = useLocation();
  const showHeaderFooter = location.pathname !== '/';

  return (
    <div style={{display: 'flex', flexDirection: 'column', minHeight: '100vh', width: '100vw', overflow: 'auto'}}>
      {showHeaderFooter && <Header />}
      <Routes>
        <Route path="/" element={<Login key={Date.now()} />}/>
        <Route path="/home" element={<Home />}/>
        <Route path="/products" element={<Products />}/>
        <Route path="/products/:id" element={<ProductDetail />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/cart" element={<Cart />}/>
        <Route path="/checkout" element={<Checkout />}/>
      </Routes>
      {showHeaderFooter && <Footer />}
    </div>
  )
}

export default App;