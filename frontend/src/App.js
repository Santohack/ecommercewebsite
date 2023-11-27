import { Container } from "@mui/material";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/pages/navbar";
import ProductList from "./components/pages/productList";
import Cart from "./components/pages/cart";
import ProductDetail from "./components/pages/productDetail";
import LoginScreen from "./components/pages/login";
import RegsiterScreen from "./components/pages/register";
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ShippingAddress from "./components/pages/shippingAddress";
import PrivateRoute from "./components/privateRoute";

function App() {
  return (
    <>
      <Router>
        <NavBar /><ToastContainer />
        <Container maxWidth="xl">
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="product/:id" element={<ProductDetail/>} />
            <Route path="/login" element={<LoginScreen />} />
            <Route path="/register" element={<RegsiterScreen />} />
        
            <Route path="" element = {<PrivateRoute />}>
            <Route path = "/shipping" element = {<ShippingAddress />} />
              </Route>
          </Routes>
          
        </Container>
      </Router>
    </>
  );
}

export default App;
