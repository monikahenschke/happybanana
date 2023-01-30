import { ThemeProvider } from "styled-components";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { GlobalTheme } from "../../../styles/globalTheme";
import { BrowserRouter as Router } from "react-router-dom";
import ActionButtons from "./ActionButtons";

test("component renders properly", () => {
  render(
    <ThemeProvider theme={GlobalTheme}>
      <Router>
        <ActionButtons />
      </Router>
    </ThemeProvider>
  );
  const div = screen.getByTestId("action-buttons");
  const links = screen.getAllByRole("link");
  expect(div).toBeInTheDocument();
  expect(links).toHaveLength(2);
});
