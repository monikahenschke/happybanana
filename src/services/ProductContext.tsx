import { createContext, FC, useContext } from "react";
import { Product } from "../Product";
export const getURI = (endpoint: string) => `http://localhost:4000/${endpoint}`;

export interface ProductsContextProps {
  fetchProductList: () => Promise<Product[]>;
  setProductListLS: (products: Product[]) => void;
  refreshListLS: () => void;
  getProductListLS: () => Product[];
  findOne: (id: number) => Promise<Product>;
}

export const ProductContext = createContext<ProductsContextProps>(
  {} as ProductsContextProps
);

export const ProductContextProvider: FC<any> = ({ children }) => {
  return (
    <ProductContext.Provider value={useProducts()}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => {
  return useContext(ProductContext);
};

export const useProducts = () => {
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

  const findOne: ProductsContextProps["findOne"] = (id) => {
    return fetch(getURI(`products/${id}`)).then((response) => response.json());
  };

  const setProductListLS: ProductsContextProps["setProductListLS"] = (
    // function sets products to local storage.
    products: Product[]
  ) => {
    localStorage.setItem("products", JSON.stringify(products));
  };

  const refreshListLS: ProductsContextProps["refreshListLS"] = () => {
    // check if products are in local storage and, if not, then use fetchProductList() and setProductListLS.
    const productsLS = getProductListLS();
    if (!productsLS) {
      fetchProductList().then((products: Product[]) => {
        setProductListLS(products);
      });
    }
  };
  const getProductListLS: ProductsContextProps["getProductListLS"] = () => {
    const productsLS = localStorage.getItem("products");
    if (typeof productsLS === "string") {
      return JSON.parse(productsLS);
    }
  };

  return {
    fetchProductList,
    setProductListLS,
    refreshListLS,
    getProductListLS,
    findOne,
  };
};
