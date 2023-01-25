import React, { useEffect } from "react";
import styled from "styled-components";

import { ProductCardTitle } from "../../styles/components";
import { FlexCenter } from "../../styles/flex";
import { useProductContext } from "../../services/ProductContext";
import Button from "../Buttons/Button";

import { ContentTextBold } from "../../styles/components";

interface BasketSummaryProps {
  children: React.ReactNode;
}

const BasketSummary = ({ children }: BasketSummaryProps) => {
  const {
    removeProductFromBasket,
    basketProductsSummary,
    finalBasketPrice,
    refreshBasketSummary,
  } = useProductContext();

  useEffect(() => {
    refreshBasketSummary();
  }, []);

  return (
    <StyledBasketSummary>
      <Background>
        <Title>
          <ProductCardTitle>
            <FlexCenter>PODSUMOWANIE</FlexCenter>
          </ProductCardTitle>
        </Title>
        <Table>
          <Row>
            <Column>
              <ContentTextBold>Produkt</ContentTextBold>
            </Column>
            <Column>
              <ContentTextBold>Cena</ContentTextBold>
            </Column>
            <Column>
              <ContentTextBold>Ilość</ContentTextBold>
            </Column>
            <Column></Column>
          </Row>
          {basketProductsSummary &&
            basketProductsSummary.map((item, key) => (
              <Row key={key}>
                <Column>
                  {item.product.title}, {item.product.unit}
                </Column>
                <Column>{item.product.price}</Column>
                <Column>{item.quantity}</Column>
                <Column>
                  <Button
                    handleClick={() => {
                      removeProductFromBasket(item.product.id);
                    }}
                    variant="transparent"
                  >
                    x
                  </Button>
                </Column>
              </Row>
            ))}
        </Table>
        <Row>
          <Column>
            <ContentTextBold>ŁĄCZNIE:</ContentTextBold>
          </Column>
          <Column>
            <ContentTextBold>{finalBasketPrice.toFixed(2)} zł</ContentTextBold>
          </Column>
        </Row>
        <div>{children}</div>
      </Background>
    </StyledBasketSummary>
  );
};

const Column = styled.div`
  padding: 5px 7px;
  &:first-child {
    width: 45%;
  }
  &:nth-child(2) {
    width: 25%;
  }
  &:nth-child(3) {
    width: 20%;
  }
  &:nth-child(4) {
    padding: 0;
    width: 10%;
  }
`;
const Row = styled.div`
  display: flex;
  margin-bottom: 5px;
`;
const Table = styled.div`
  margin: 25px 0;
`;
const StyledBasketSummary = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 50%;
`;

const Background = styled.div`
  background: ${({ theme }) => theme.colors.primary};
  min-width: 500px;
  flex-shrink: 0;
  padding: 30px;
`;

const Title = styled.div`
  position: relative;
  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 65%;
    background: ${({ theme }) => theme.colors.black};
    height: 1px;
  }
`;
export default BasketSummary;
