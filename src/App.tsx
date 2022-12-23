import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { GlobalTheme } from "./styles/globalTheme";
import { GlobalFontStyles } from "./styles/fontStyles";
import { GlobalStyles } from "./styles/globalStyles";

import Header from "./components/Header";
import ProductCard from "./components/ProductCard";
import Basket from "./components/Basket";
import OrderList from "./components/OrderList";
import ProductList from "./components/ProductList";
import Content from "./components/Content";
import Footer from "./components/Footer";

export const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<ProductList />} />
    <Route path="/basket" element={<Basket />} />
    <Route path="/order-list" element={<OrderList />} />
    <Route path="/product/:id" element={<ProductCard />} />
  </Routes>
);

function App() {
  return (
    <ThemeProvider theme={GlobalTheme}>
      <GlobalStyles />
      <GlobalFontStyles />
      <Header />
      <Content />
      <Footer />
      <Router>
        <div className="container">
          <nav>
            <ul>
              <li>
                <Link to="/">Product List</Link>
              </li>
              <li>
                <Link to="/basket">Basket</Link>
              </li>
              <li>
                <Link to="/order-list">Order List</Link>
              </li>
              <li>
                <Link to="/product/2">Product 2</Link>
              </li>
            </ul>
          </nav>
          <AppRoutes />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
