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
import { BasketSummaryProduct } from "../models/ProductBasketSummaryModel";

export const getURI = (endpoint: string) => `http://localhost:4000/${endpoint}`;

export interface ProductsContextProps {
  fetchProductList: () => Promise<Product[]>;
  findOneProduct: (id: number) => Promise<Product>;
  addToBasket: (basketProduct: BasketProduct) => void;
  setBasketLS: (productAddedToBasket: BasketProduct[]) => void;
  getBasketLS: () => BasketProduct[];
  basketState: number;
  productBasketSummary: BasketSummaryProduct[];
  removeProductFromBasket: (id: number) => void;
  finalBasketPrice: number;
  refreshBasketSummary: () => Promise<void>;
}

export const ProductContext = createContext<ProductsContextProps>(
  {} as ProductsContextProps
);

export const ProductContextProvider: FC<any> = ({ children }) => {
  const [basketState, setBasketState] = useState<number>(0);
  const [productBasketSummary, setProductBasketSummary] = useState<
    BasketSummaryProduct[]
  >([]);
  const [finalBasketPrice, setFinalBasketPrice] = useState<number>(0);

  useEffect(() => {
    setBasketState(calculateBasketState());
  }, []);

  const refreshBasketSummary = async () => {
    const basketLS = getBasketLS();
    if (!basketLS) return;
    let finalPrice = 0;

    const unresolvedBasketSummaryProducts: Promise<BasketSummaryProduct>[] =
      basketLS.map(async (basketProduct) => {
        const productFromDb = await findOneProduct(basketProduct.productId);
        finalPrice += productFromDb.price * basketProduct.quantity;

        return { product: productFromDb, quantity: basketProduct.quantity };
      });

    //Promise<BasketSummaryProduct>[]  ===>  BasketSummaryProduct[]

    const basketSummaryProducts = await Promise.all(
      unresolvedBasketSummaryProducts
    );

    setProductBasketSummary(basketSummaryProducts);
    setFinalBasketPrice(finalPrice);
  };
  const calculateBasketState = () => {
    const basketLS = getBasketLS();
    let quantityCounter = 0;
    basketLS.forEach((el) => {
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
        console.error(`Fetch failed. Msg: ${err}`);
      });
  };

  const findOneProduct: ProductsContextProps["findOneProduct"] = (id) => {
    return fetch(getURI(`products/${id}`)).then((response) => response.json());
  };

  const removeProductFromBasket: ProductsContextProps["removeProductFromBasket"] =
    (id) => {
      const basketLS = getBasketLS();

      const newProductBasketSummary = productBasketSummary.filter(
        (el) => el.product.id !== id
      );

      const newBasketLS = basketLS.filter((el) => el.productId !== id);

      setProductBasketSummary(newProductBasketSummary);
      setBasketLS(newBasketLS);
      setBasketState(calculateBasketState());
    };

  const setBasketLS: ProductsContextProps["setBasketLS"] = (
    productAddedToBasket
  ) => {
    localStorage.setItem("basket", JSON.stringify(productAddedToBasket));
  };

  const getBasketLS: ProductsContextProps["getBasketLS"] = () => {
    const productsBasketLS = localStorage.getItem("basket");
    if (typeof productsBasketLS === "string") {
      return JSON.parse(productsBasketLS);
    }

    return [];
  };

  const addToBasket: ProductsContextProps["addToBasket"] = (basketProduct) => {
    const basketLS = getBasketLS();

    const itemFromBasket = basketLS.find(
      (item) => item.productId === basketProduct.productId
    );

    if (itemFromBasket) {
      itemFromBasket.quantity += basketProduct.quantity;
    } else {
      basketLS.push(basketProduct);
    }

    setBasketLS(basketLS);
    setBasketState(calculateBasketState());
  };

  const value = useMemo(
    () => ({
      fetchProductList,
      findOneProduct,
      addToBasket,
      setBasketLS,
      getBasketLS,
      basketState,
      setBasketState,
      calculateBasketState,
      removeProductFromBasket,
      productBasketSummary,
      setProductBasketSummary,
      finalBasketPrice,
      refreshBasketSummary,
    }),
    [basketState, finalBasketPrice, productBasketSummary]
  );

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};

export const useProductContext = () => {
  return useContext(ProductContext);
};
