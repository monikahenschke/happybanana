import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { createContextMock } from "../../services/ProductContextMock";
import { ProductContext } from "../../services/ProductContext";
import { ThemeProvider } from "styled-components";
import { GlobalTheme } from "../../styles/globalTheme";
import { BrowserRouter as Router } from "react-router-dom";
import ProductList from "./ProductList";
import { Product } from "../../models/ProductModel";

const MockComponent: React.FC<Product> = ({
  id,
  title,
  origin,
  unit,
  price,
  image,
  category,
  description,
}) => {
  return (
    <>
      <div>
        <p>${id}</p>
        <p>${title}</p>
        <p>${origin}</p>
        <p>${unit}</p>
        <p>${price}</p>
        <p>${image}</p>
        <p>${category}</p>
        <p>${description}</p>
      </div>
    </>
  );
};

const mockList = [
  {
    id: 2,
    title: "Banany",
    origin: "Brazylia",
    unit: "kg",
    price: 3434,
    image: "asdasd",
    category: "Owoc",
    description: "sadsadhjkasdhaasd",
  },
  {
    id: 3,
    title: "Truskawki",
    origin: "Polska",
    unit: "kg",
    price: 3,
    image: "aasdsadsd",
    category: "Owoc",
    description: "sadajsasd",
  },
];

test("component renders a valid HTML element", () => {
  const store = createContextMock();

  render(
    <ThemeProvider theme={GlobalTheme}>
      <Router>
        <ProductContext.Provider value={{ ...store }}>
          <ProductList>
            {mockList.map((item, index) => (
              <MockComponent
                key={index}
                id={item.id}
                title={item.title}
                unit={item.unit}
                price={item.price}
                origin={item.origin}
                image={item.image}
                category={item.category}
                description={item.description}
              />
            ))}
          </ProductList>
        </ProductContext.Provider>
      </Router>
    </ThemeProvider>
  );

  expect(screen.getByRole("list")).toBeInTheDocument();
});
