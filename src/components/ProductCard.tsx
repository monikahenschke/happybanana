import React from "react";
import { useParams } from "react-router-dom";

type ParamTypes = {
  id: string;
};

const ProductCard: React.FC = () => {
  const { id } = useParams<ParamTypes>();

  return (
    <div className="container">
      <h1>ProductCard {id}</h1>
    </div>
  );
};

export default ProductCard;
