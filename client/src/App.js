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
import Men from './pages/sections/Men';
import Women from './pages/sections/Women';
import Kid from './pages/sections/Kid';
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
        <Route exact path="/men" element={<Men />} />
        <Route exact path="/women" element={<Women />} />
        <Route exact path="/kid" element={<Kid />} />


      </Routes>
      <TogleNavbar>
        <Footer />
      </TogleNavbar>
    </>
  );
}

export default App;
