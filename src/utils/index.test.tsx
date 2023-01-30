import {
  sortOrdersByDate,
  findProductById,
  getBasketLS,
  setBasketLS,
  calculateBasketProductsQuantity,
} from ".";
import { ordersMock } from "../models/mock/BasketProductSummaryModelMock";
import { basketProductMock } from "../models/mock/BasketProductsModelMock";
import db from "../../db.json";

let data: {
  key: string;
};

beforeAll(() => {
  global.localStorage.setItem = jest.fn((key: string, value: any) => {
    data = {
      key: value,
    };
  });
  global.localStorage.getItem = jest.fn((key: string) => {
    return data.key;
  });
});

test("sortOrdersByDate sorts orders properly", () => {
  const sorted = sortOrdersByDate(ordersMock);
  expect(sorted[0].id).toBe(1674051844793);
  expect(sorted[1].id).toBe(1674051773691);
  expect(sorted[2].id).toBe(1674047733104);
});

test("findProductById works properly", () => {
  const foundProduct = findProductById(1, db["products"])!;

  expect(foundProduct).toBeTruthy();
  expect(foundProduct.title).toBe("Kalafior");
});

test("if localstorage is set correctly", () => {
  setBasketLS(basketProductMock);

  const result = getBasketLS();
  expect(result).not.toBeNull();
});

test("basket products quantity is calculated properly", () => {
  const result = calculateBasketProductsQuantity(basketProductMock);
  expect(result).toBe(8);
});
