import Navbar from './components/Navbar';
import "./App.css"
import { Route, Routes } from 'react-router-dom';
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
import { Toaster } from "react-hot-toast"
import FirstCheck from './components/FirstCheck';
import Profile from './pages/Profile';
import AddProduct from './pages/utilities/AddProduct';
import Orders from './pages/Orders';
import Loader from './pages/cards/Loader';
import Stepper from './pages/profilePage/Stepper';
import Stepper1 from './pages/profilePage/Stepper';
function App() {


  return (
    <>
      <Toaster />
      <TogleNavbar>
        <Navbar />
      </TogleNavbar>
      <Routes>

        <Route exact path="/bag" element={
          <FirstCheck>
            <Bag />
          </FirstCheck>} />
        <Route exact path="/profile" element={
          <FirstCheck>
            <Profile />
          </FirstCheck>
        } />
        <Route exact path="/address" element={
          <FirstCheck>
            <Address />
          </FirstCheck>} />
        <Route exact path="/payment" element={
          <FirstCheck>
            <Payment />
          </FirstCheck>} />
        <Route exact path="/wishlist" element={
          <FirstCheck>
            <Wishlist />
          </FirstCheck>} />
        <Route exact path="/" element={<Home />} />
        <Route exact path="/stepper" element={<Stepper1 />} />
        <Route exact path="/loader" element={<Loader />} />
        <Route exact path="/addproduct" element={<AddProduct />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/product" element={<ProductView />} />
        <Route exact path="/allproduct" element={<AllProduct />} />
        <Route exact path="/men" element={<Men />} />
        <Route exact path="/women" element={<Women />} />
        <Route exact path="/kid" element={<Kid />} />
        <Route exact path="/order" element={<Orders />} />

      </Routes>
      <TogleNavbar>
        <Footer />
      </TogleNavbar>
    </>
  );
}

export default App;
