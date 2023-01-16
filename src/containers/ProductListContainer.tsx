import Filters from "../components/Filters";
import ProductList from "../components/ProductList";
import { useEffect, useState } from "react";
import { useProductContext } from "../services/ProductContext";
import { Product } from "../models/ProductModel";
import Pagination from "../components/Pagination";
import { Container } from "../styles/components";
import ProductListItem from "../components/ProductListItem";

const ProductListContainer: React.FC = () => {
  const [productList, setProductList] = useState<Product[]>([]);
  // const [productListCurrentlyShown, setProductListCurrentlyShown] = useState<
  //   Product[]
  // >([]);
  // TODO: PAGINACJA

  const { fetchProductList } = useProductContext();

  useEffect(() => {
    fetchProductList().then((products: Product[]) => {
      setProductList(products);
    });
  }, []);

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
                unit={product.unit}
                price={product.price}
                image={product.image}
                category={product.category}
                description={product.description}
              />
            ))}
        </ProductList>
      </Container>
      {/* <Pagination
        itemsPerPage={8}
        itemsList={productList}
        setItemsListCurrentlyShown={setProductListCurrentlyShown}
      /> */}
    </>
  );
};

export default ProductListContainer;
