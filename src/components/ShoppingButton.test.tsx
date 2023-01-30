import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ThemeProvider } from "styled-components";
import { GlobalTheme } from "../styles/globalTheme";
import ShoppingButton from "./ShoppingButton";

const productMock = {
  id: 3,
};

function renderComponent() {
  return render(
    <ThemeProvider theme={GlobalTheme}>
      <ShoppingButton productId={productMock.id} />
    </ThemeProvider>
  );
}
test("buttons have been rendered properly, increasing and decreasing value is working", async () => {
  renderComponent();
  const incrementButton = screen.getByRole("button", {
    name: "+",
  });

  const decrementButton = screen.getByRole("button", {
    name: "-",
  });

  const amountInput = screen.getByRole("spinbutton");
  const addToBasketButton = screen.getByRole("button", {
    name: /Add to basket/i,
  });

  fireEvent.click(incrementButton);
  fireEvent.click(incrementButton);
  fireEvent.click(decrementButton);

  await waitFor(() => {
    expect(amountInput).toHaveValue(2);
  });

  await waitFor(() => {
    expect(addToBasketButton).toBeInTheDocument();
  });
});
