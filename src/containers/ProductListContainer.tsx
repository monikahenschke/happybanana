import Filters from "../components/Filters";
import ProductList from "../components/ProductList";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useProductContext } from "../services/ProductContext";
import { Product } from "../Product";
import { Pagination } from "./Pagination";
import { Container } from "../styles/components";
import ProductListItem from "../components/ProductListItem";

export interface Props {}

const ProductListContainer: React.FC = () => {
  const [productList, setProductList] = useState<Product[]>([]);

  const {
    fetchProductList,
    setProductListLS,
    refreshListLS,
    getProductListLS,
  } = useProductContext();

  useEffect(() => {
    if (!Cookies.get("visited")) {
      Cookies.set("visited", "true");
      // set products in local storage on first visit
      fetchProductList().then((products: Product[]) => {
        setProductListLS(products);
      });
    }
    refreshListLS();
    setProductList(getProductListLS());
  }, []);

  useEffect(() => {
    console.log(productList);
  }, [productList]);

  return (
    <>
      <Filters />
      <Container>
        <ProductList>
          {productList &&
            productList.map((product, index) => (
              <ProductListItem
                id={product.id}
                key={index}
                title={product.title}
                origin={product.origin}
                quantity={product.quantity}
                price={product.price}
                image={product.image}
                category={product.category}
              />
            ))}
        </ProductList>
      </Container>
      {/* <Pagination /> */}
    </>
  );
};

export default ProductListContainer;
