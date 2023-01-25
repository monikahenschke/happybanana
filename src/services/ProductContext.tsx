import {
  createContext,
  FC,
  useContext,
  useState,
  useMemo,
  useEffect,
} from "react";
import { Product } from "../models/ProductModel";
import { BasketProduct } from "../models/BasketProductModel";
import { BasketProductSummary } from "../models/BasketProductSummaryModel";
import { Order } from "../models/OrderModel";
import { FilterTypeEnum } from "../enums/FilterTypeEnum";
import { SortTypeEnum } from "../enums/SortTypeEnum";

import {
  calculateBasketFinalPrice,
  calculateBasketProductsQuantity,
  getBasketLS,
  setBasketLS,
} from "../utils";

export const getURI = (endpoint: string) => `http://localhost:4000/${endpoint}`;

export interface ProductsContextProps {
  fetchProductList: () => Promise<Product[]>;
  findOneProduct: (id: number) => Promise<Product>;
  fetchProductsByCategory: (
    category: string,
    id: number,
    limit: number
  ) => Promise<Product[]>;
  addToBasket: (basketProduct: BasketProduct) => void;
  quantityBasketProducts: number;
  basketProductsSummary: BasketProductSummary[];
  removeProductFromBasket: (id: number) => void;
  finalBasketPrice: number;
  refreshBasketSummary: () => Promise<void>;
  saveNewOrder: (saveNewOrder: Order) => Promise<void>;
  fetchOrderList: () => Promise<Order[]>;
  filterState: FilterTypeEnum;
  setFilterState: React.Dispatch<React.SetStateAction<FilterTypeEnum>>;
  sortState: SortTypeEnum;
  setSortState: React.Dispatch<React.SetStateAction<SortTypeEnum>>;
  productList: Product[];
}

export const ProductContext = createContext<ProductsContextProps>(
  {} as ProductsContextProps
);

export const ProductContextProvider: FC<any> = ({ children }) => {
  const [quantityBasketProducts, setQuantityBasketProducts] =
    useState<number>(0);
  const [basketProductsSummary, setBasketProductsSummary] = useState<
    BasketProductSummary[]
  >([]);
  const [finalBasketPrice, setFinalBasketPrice] = useState<number>(0);
  const basketLS = getBasketLS();
  const [basketProducts, setBasketProducts] =
    useState<BasketProduct[]>(basketLS);
  const [filterState, setFilterState] = useState<FilterTypeEnum>(
    FilterTypeEnum.All
  );
  const [sortState, setSortState] = useState<SortTypeEnum>(SortTypeEnum.Name);
  const [productList, setProductList] = useState<Product[]>([]);

  useEffect(() => {
    fetchProductList().then((products: Product[]) => {
      setProductList(products);
    });
    return () => {
      setBasketLS(basketProducts);
    };
  }, []);

  useEffect(() => {
    setQuantityBasketProducts(calculateBasketProductsQuantity(basketProducts));
  }, [basketProducts]);

  const refreshBasketSummary = async () => {
    if (!basketProducts) return;
    const unresolvedBasketSummaryProducts: Promise<BasketProductSummary>[] =
      basketProducts.map(async (basketProduct) => {
        const productFromDb = await findOneProduct(basketProduct.productId);
        return { product: productFromDb, quantity: basketProduct.quantity };
      });
    const basketSummaryProducts = await Promise.all(
      unresolvedBasketSummaryProducts
    );
    setBasketProductsSummary(basketSummaryProducts);
    calculateBasketFinalPrice(basketSummaryProducts, setFinalBasketPrice);
  };

  const fetchProductList: ProductsContextProps["fetchProductList"] = () => {
    //
    return fetch(getURI("products"))
      .then((response) => {
        return response.json();
      })
      .catch((err) => {
        console.error(`Fetch products failed. Msg: ${err}`);
      });
  };

  const findOneProduct: ProductsContextProps["findOneProduct"] = (id) => {
    return fetch(getURI(`products/${id}`)).then((response) => response.json());
  };

  const fetchProductsByCategory: ProductsContextProps["fetchProductsByCategory"] =
    (category, id, limit) => {
      return fetch(
        getURI(`products?category=${category}&id_ne=${id}&_limit=${limit}`)
      )
        .then((response) => {
          return response.json();
        })
        .catch((err) => {
          console.error(`Fetch products failed. Msg: ${err}`);
        });
    };

  const removeProductFromBasket: ProductsContextProps["removeProductFromBasket"] =
    (id) => {
      const newProductBasketSummary = basketProductsSummary.filter(
        (el) => el.product.id !== id
      );
      const newBasketLS = basketProducts.filter((el) => el.productId !== id);

      setBasketProductsSummary(newProductBasketSummary);
      setBasketProducts(newBasketLS);
      setQuantityBasketProducts(calculateBasketProductsQuantity(newBasketLS));
      calculateBasketFinalPrice(newProductBasketSummary, setFinalBasketPrice);
    };

  const addToBasket: ProductsContextProps["addToBasket"] = (
    basketProductToAdd
  ) => {
    const basketProductsCopy = [...basketProducts];

    const itemFromBasket = basketProductsCopy.find(
      (item) => item.productId === basketProductToAdd.productId
    );

    if (itemFromBasket) {
      itemFromBasket.quantity += basketProductToAdd.quantity;
    } else {
      basketProductsCopy.push(basketProductToAdd);
    }
    setBasketProducts(basketProductsCopy);
    setQuantityBasketProducts(
      calculateBasketProductsQuantity(basketProductsCopy)
    );
  };

  const saveNewOrder: ProductsContextProps["saveNewOrder"] = (orderToSave) => {
    return fetch(getURI("orders"), {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(orderToSave),
    })
      .then((response) => response.json())
      .then(() => {
        setBasketProducts([]);
        setFinalBasketPrice(0);
      })
      .catch((err) => {
        console.error(`Fetch failed. Msg: ${err}`);
      });
  };

  const fetchOrderList: ProductsContextProps["fetchOrderList"] = () => {
    return fetch(getURI("orders"))
      .then((response) => {
        return response.json();
      })
      .catch((err) => {
        console.error(`Fetch orders failed. Msg: ${err}`);
      });
  };
  const value = useMemo(
    () => ({
      fetchProductList,
      findOneProduct,
      fetchProductsByCategory,
      addToBasket,
      quantityBasketProducts,
      removeProductFromBasket,
      basketProductsSummary,
      setBasketProductsSummary,
      finalBasketPrice,
      refreshBasketSummary,
      saveNewOrder,
      fetchOrderList,
      filterState,
      setFilterState,
      sortState,
      setSortState,
      productList,
    }),
    [
      quantityBasketProducts,
      finalBasketPrice,
      basketProductsSummary,
      filterState,
      sortState,
      productList,
    ]
  );

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};

export const useProductContext = () => {
  return useContext(ProductContext);
};
