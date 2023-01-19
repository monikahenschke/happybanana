import { useEffect, useState } from "react";
import { Flex, FlexCenter } from "../styles/flex";
import styled from "styled-components";
import { ContentText, ProductCardTitle, PriceText } from "../styles/components";
import { useProductContext } from "../services/ProductContext";
import { Product } from "../models/ProductModel";
import ProductListItem from "./ProductListItem";
import ProductList from "./ProductList";

type ParamTypes = {
  category: string;
  productId: number;
};

const ProposedProducts = ({ category, productId }: ParamTypes) => {
  const { fetchProductsByCategory } = useProductContext();
  const [proposedProducts, setProposedProducts] = useState<Product[]>([]);

  useEffect(() => {
    if (category) {
      fetchProductsByCategory(category, productId, 4).then((list) =>
        setProposedProducts(list)
      );
    }
  }, [category, productId]);

  return (
    <>
      <FlexCenter>
        <ProductCardTitle>Inne produkty z tej kategori </ProductCardTitle>
      </FlexCenter>
      <StyledProposedProducts>
        <ProductList>
          {proposedProducts &&
            proposedProducts.map((product, index) => (
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
      </StyledProposedProducts>
    </>
  );
};

const StyledProposedProducts = styled.div`
  padding-top: 10px;
`;
export default ProposedProducts;
