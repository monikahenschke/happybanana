import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { GlobalTheme } from "./styles/globalTheme";
import { GlobalStyles } from "./styles/globalStyles";

import Header from "./components/Header";
import ProductCard from "./components/ProductCard";
import Basket from "./components/Basket";
import OrdersListContainer from "./containers/OdersListContainer";
import ProductListContainer from "./containers/ProductListContainer";
import Footer from "./components/Footer";
import { ProductContextProvider } from "./services/ProductContext";

export const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<ProductListContainer />} />
    <Route path="/basket" element={<Basket />} />
    <Route path="/orders" element={<OrdersListContainer />} />
    <Route path="/product/:id" element={<ProductCard />} />
  </Routes>
);

function App() {
  return (
    <ThemeProvider theme={GlobalTheme}>
      <GlobalStyles />
      <ProductContextProvider>
        <Router>
          <Header />
          <AppRoutes />
          <Footer />
        </Router>
      </ProductContextProvider>
    </ThemeProvider>
  );
}

export default App;
