import Filters from "../components/Filters";
import ProductList from "../components/ProductList";
import { useEffect, useState } from "react";
import { useProductContext } from "../services/ProductContext";
import { Product } from "../models/ProductModel";
import { FilterTypeEnum } from "../enums/FilterTypeEnum";
import { Container } from "../styles/components";
import ProductListItem from "../components/ProductListItem";
import { sortProductsByParam } from "../utils";

const ProductListContainer: React.FC = () => {
  const { filterState, sortState, productList } = useProductContext();

  const [filteredProductList, setFilteredProductList] = useState<Product[]>([]);
  const [sortedProductList, setSortedProductList] = useState<Product[]>([]);

  useEffect(() => {
    setFilteredProductList(productList);
  }, [productList]);

  useEffect(() => {
    let newProductList: Product[] = [];

    if (filterState !== FilterTypeEnum.All) {
      newProductList = productList.filter((item) => {
        return item.category === filterState;
      });
    } else newProductList = productList;

    setFilteredProductList(newProductList);
  }, [filterState]);

  useEffect(() => {
    const sortedProducts = sortProductsByParam(filteredProductList, sortState);
    setSortedProductList([...sortedProducts]);
  }, [sortState, filteredProductList]);

  return (
    <>
      <Filters />
      <Container>
        <ProductList>
          {sortedProductList &&
            sortedProductList.map((product, index) => (
              <ProductListItem
                id={product.id}
                key={index}
                title={product.title}
                origin={product.origin}
                unit={product.unit}
                price={product.price}
                image={product.image}
                category={product.category}
                description={product.description}
              />
            ))}
        </ProductList>
      </Container>
    </>
  );
};

export default ProductListContainer;
