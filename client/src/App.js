import Navbar from './components/Navbar';
import "./App.css"
import { Route, Router, Routes } from 'react-router-dom';
import Home from './components/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import TogleNavbar from './pages/TogleNavbar';
import Bag from './pages/Bag';
import Address from './pages/Address';
import Payment from './pages/Payment';
import Wishlist from './pages/Wishlist';
import ProductView from './pages/ProductView';
import Footer from './components/Footer';
import AllProduct from './pages/AllProduct';
function App() {
  return (
    <>
      <TogleNavbar>
        <Navbar />
      </TogleNavbar>

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/bag" element={<Bag />} />
        <Route exact path="/address" element={<Address />} />
        <Route exact path="/payment" element={<Payment />} />
        <Route exact path="/wishlist" element={<Wishlist />} />
        <Route exact path="/product" element={<ProductView />} />
        <Route exact path="/allproduct" element={<AllProduct />} />

      </Routes>
      <TogleNavbar>
        <Footer />
      </TogleNavbar>
    </>
  );
}

export default App;
