import { Container } from "@mui/material";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/pages/navbar";
import ProductList from "./components/pages/productList";
import Cart from "./components/pages/cart";
import ProductDetail from "./components/pages/productDetail";
import LoginScreen from "./components/pages/login";
import RegsiterScreen from "./components/pages/register";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Container maxWidth="xl">
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="product/:id" element={<ProductDetail/>} />
            <Route path="/login" element={<LoginScreen />} />
            <Route path="/register" element={<RegsiterScreen />} />
          </Routes>
        </Container>
      </Router>
    </>
  );
}

export default App;
