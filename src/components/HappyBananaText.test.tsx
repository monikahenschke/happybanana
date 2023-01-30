import { ThemeProvider } from "styled-components";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { GlobalTheme } from "../styles/globalTheme";
import { BrowserRouter as Router } from "react-router-dom";
import HappyBananaText from "./HappyBananaText";

test("Logo text renders properly", () => {
  render(
    <ThemeProvider theme={GlobalTheme}>
      <Router>
        <HappyBananaText />
      </Router>
    </ThemeProvider>
  );
  const logoTextPart1 = screen.getByText(/Happy/i);
  const logoTextPart2 = screen.getByText(/Banana/i);
  expect(logoTextPart1).toBeInTheDocument();
  expect(logoTextPart2).toBeInTheDocument();
});
