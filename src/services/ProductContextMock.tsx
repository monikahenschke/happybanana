import { ProductsContextProps } from "./ProductContext";
import { Product } from "../models/ProductModel";
import db from "../../db.json";
import { FilterTypeEnum } from "../enums/FilterTypeEnum";
import { SortTypeEnum } from "../enums/SortTypeEnum";
import { BasketProductSummary } from "../models/BasketProductSummaryModel";

export function createContextMock(): ProductsContextProps {
  const fetchProductList = jest.fn();
  const findOneProduct = jest.fn();
  const fetchProductsByCategory = jest.fn();
  const addToBasket = () => jest.fn();
  const quantityBasketProducts = 3;
  const basketProductsSummary: BasketProductSummary[] = [
    { product: db["products"][0], quantity: 3 },
  ];
  const removeProductFromBasket = () => jest.fn();
  const finalBasketPrice = 3;
  const refreshBasketSummary = jest.fn();
  const saveNewOrder = jest.fn();
  const fetchOrderList = jest.fn();
  const filterState = FilterTypeEnum.All;
  const setFilterState = jest.fn();
  const sortState = SortTypeEnum.Name;
  const setSortState = jest.fn();
  const productList: Product[] = db["products"];

  return {
    fetchProductList,
    findOneProduct,
    fetchProductsByCategory,
    addToBasket,
    quantityBasketProducts,
    basketProductsSummary,
    removeProductFromBasket,
    finalBasketPrice,
    refreshBasketSummary,
    saveNewOrder,
    fetchOrderList,
    filterState,
    setFilterState,
    sortState,
    setSortState,
    productList,
  };
}
