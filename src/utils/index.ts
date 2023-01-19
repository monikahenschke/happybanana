import { Order } from "../models/OrderModel";
import { BasketProductSummary } from "../models/BasketProductSummaryModel";
import { BasketProduct } from "../models/BasketProductModel";

export const decrementInput = (
  inputValue: number,
  setInputValue: React.Dispatch<React.SetStateAction<number>>
) => {
  if (inputValue === 1) {
    setInputValue(1);
  } else {
    setInputValue((prevValue) => prevValue - 1);
  }
};

export const incrementInput = (
  inputValue: number,
  setInputValue: React.Dispatch<React.SetStateAction<number>>
) => {
  if (inputValue >= 15) {
    setInputValue(15);
  } else {
    setInputValue((prevValue) => prevValue + 1);
  }
};

export const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //TODO
  // let { value, min, max } = e.target;
  // let numValue = Number(value);
  // numValue = Math.max(
  //   Number(min),
  //   Math.min(Number(max), Number(value.replace(/\D/, "")))
  // );
  // setInputValue(numValue);
};

export function getDate(id: number) {
  const date = new Date(id);
  let day: string | number;
  let month: string | number;
  let year: number;

  day = date.getDate();
  month = date.getMonth() + 1;
  year = date.getFullYear();

  if (month < 10) {
    month = "0" + month;
  }
  if (day < 10) {
    day = "0" + day;
  }
  const str = day + "." + month + "." + year;

  return str;
}

export function sortOrdersByDate(orders: Order[]) {
  orders.sort(function (a, b) {
    return b.id - a.id;
  });

  return orders;
}

export const calculateBasketFinalPrice = (
  products: BasketProductSummary[],
  setFinalBasketPrice: React.Dispatch<React.SetStateAction<number>>
) => {
  let finalPrice = 0;
  products.forEach((item) => {
    finalPrice += item.product.price * item.quantity;
  });
  setFinalBasketPrice(finalPrice);
};

export const calculateBasketProductsQuantity = (
  basketProducts: BasketProduct[]
) => {
  let quantityCounter = 0;
  basketProducts.forEach((el) => {
    quantityCounter = quantityCounter + el.quantity;
  });

  return quantityCounter;
};

export const getBasketLS = () => {
  const productsBasketLS = localStorage.getItem("basket");
  if (typeof productsBasketLS === "string") {
    return JSON.parse(productsBasketLS);
  }

  return [];
};

export const setBasketLS = (productsAddedToBasket: BasketProduct[]) => {
  localStorage.setItem("basket", JSON.stringify(productsAddedToBasket));
};
