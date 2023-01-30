import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";

test("header and footer renders properly", () => {
  render(<App />);
  const header = screen.getByTestId(/header/i);
  const footer = screen.getByTestId(/footer/i);
  expect(header).toBeInTheDocument();
  expect(footer).toBeInTheDocument();
});
