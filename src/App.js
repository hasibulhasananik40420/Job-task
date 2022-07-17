import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home/Home';
import { Routes, Route } from "react-router-dom";
import SingleProduct from './Pages/SingleProduct/SingleProduct';
import Footer from './Components/Footer/Footer';
import AllProducts from './Pages/AllProducts/AllProducts';
import Contact from './Pages/Contact/Contact';
function App() {
  return (
    <div>
      <Navbar></Navbar>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<AllProducts />} />
        <Route path="singleproduct/:id" element={<SingleProduct />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
