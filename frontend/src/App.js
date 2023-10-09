import { Container } from "@mui/material";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/pages/navbar";
import ProductList from "./components/pages/productList";
import Cart from "./components/pages/cart";
import ProductDetail from "./components/pages/productDetail";

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
          </Routes>
        </Container>
      </Router>
    </>
  );
}

export default App;
