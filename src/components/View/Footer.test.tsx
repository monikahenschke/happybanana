import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Footer from "./Footer";
import { ThemeProvider } from "styled-components";
import { GlobalTheme } from "../../styles/globalTheme";
import { BrowserRouter as Router } from "react-router-dom";

test("logo (text and img) in Footer renders properly", () => {
  render(
    <ThemeProvider theme={GlobalTheme}>
      <Router>
        <Footer />
      </Router>
    </ThemeProvider>
  );
  const img = screen.getByAltText(/Logo/i);
  expect(img).toBeInTheDocument();
});
