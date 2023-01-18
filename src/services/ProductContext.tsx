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

export const getURI = (endpoint: string) => `http://localhost:4000/${endpoint}`;

export interface ProductsContextProps {
  fetchProductList: () => Promise<Product[]>;
  findOneProduct: (id: number) => Promise<Product>;
  addToBasket: (basketProduct: BasketProduct) => void;
  setBasketLS: (productAddedToBasket: BasketProduct[]) => void;
  getBasketLS: () => BasketProduct[];
  quantityBasketProducts: number;
  basketProductsSummary: BasketProductSummary[];
  removeProductFromBasket: (id: number) => void;
  finalBasketPrice: number;
  refreshBasketSummary: () => Promise<void>;
  saveNewOrder: (saveNewOrder: Order) => Promise<void>;
  fetchOrderList: () => Promise<Order[]>;
}

export const ProductContext = createContext<ProductsContextProps>(
  {} as ProductsContextProps
);

const setBasketLS: ProductsContextProps["setBasketLS"] = (
  productsAddedToBasket
) => {
  localStorage.setItem("basket", JSON.stringify(productsAddedToBasket));
};

const getBasketLS: ProductsContextProps["getBasketLS"] = () => {
  const productsBasketLS = localStorage.getItem("basket");
  if (typeof productsBasketLS === "string") {
    return JSON.parse(productsBasketLS);
  }

  return [];
};

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

  useEffect(() => {
    return () => {
      setBasketLS(basketProducts);
    };
  }, []);

  useEffect(() => {
    setQuantityBasketProducts(calculateBasketProductsQuantity());
  }, [basketProducts]);

  const refreshBasketSummary = async () => {
    if (!basketProducts) return;
    let finalPrice = 0;
    const unresolvedBasketSummaryProducts: Promise<BasketProductSummary>[] =
      basketProducts.map(async (basketProduct) => {
        const productFromDb = await findOneProduct(basketProduct.productId);
        finalPrice += productFromDb.price * basketProduct.quantity;
        return { product: productFromDb, quantity: basketProduct.quantity };
      });
    //Promise<BasketSummaryProduct>[]  ===>  BasketSummaryProduct[]
    const basketSummaryProducts = await Promise.all(
      unresolvedBasketSummaryProducts
    );
    setBasketProductsSummary(basketSummaryProducts);
    setFinalBasketPrice(finalPrice);
  };

  const calculateBasketProductsQuantity = () => {
    let quantityCounter = 0;
    basketProducts.forEach((el) => {
      quantityCounter = quantityCounter + el.quantity;
    });

    return quantityCounter;
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

  const removeProductFromBasket: ProductsContextProps["removeProductFromBasket"] =
    (id) => {
      const newProductBasketSummary = basketProductsSummary.filter(
        (el) => el.product.id !== id
      );
      const newBasketLS = basketProducts.filter((el) => el.productId !== id);

      setBasketProductsSummary(newProductBasketSummary);
      setBasketProducts(newBasketLS);
      setQuantityBasketProducts(calculateBasketProductsQuantity());
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
    setQuantityBasketProducts(calculateBasketProductsQuantity());
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
      addToBasket,
      setBasketLS,
      getBasketLS,
      quantityBasketProducts,
      setQuantityBasketProducts,
      calculateBasketProductsQuantity,
      removeProductFromBasket,
      basketProductsSummary,
      setBasketProductsSummary,
      finalBasketPrice,
      refreshBasketSummary,
      saveNewOrder,
      fetchOrderList,
    }),
    [quantityBasketProducts, finalBasketPrice, basketProductsSummary]
  );

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};

export const useProductContext = () => {
  return useContext(ProductContext);
};
