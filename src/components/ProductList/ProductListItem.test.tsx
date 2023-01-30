import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ProductListItem from "./ProductListItem";
import { createContextMock } from "../../services/ProductContextMock";
import { ProductContext } from "../../services/ProductContext";
import { ThemeProvider } from "styled-components";
import { GlobalTheme } from "../../styles/globalTheme";
import { BrowserRouter as Router } from "react-router-dom";

test("component renders a valid HTML element", () => {
  const store = createContextMock();

  render(
    <ThemeProvider theme={GlobalTheme}>
      <Router>
        <ProductContext.Provider value={{ ...store }}>
          <ProductListItem
            id={store.productList[0].id}
            title={store.productList[0].title}
            unit={store.productList[0].unit}
            price={store.productList[0].price}
            origin={store.productList[0].origin}
            image={store.productList[0].image}
            category={store.productList[0].category}
            description={store.productList[0].description}
          />
        </ProductContext.Provider>
      </Router>
    </ThemeProvider>
  );

  expect(screen.getByRole("listitem")).toBeInTheDocument();
});
