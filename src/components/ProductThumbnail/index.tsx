import React, { HTMLAttributes } from "react";
import { S } from "./styled";

interface ProductThumbnailProps extends HTMLAttributes<HTMLElement> {
  productId: number;
  preview: string;
  name: string;
  price: number;
}

const ProductThumbnail: React.FC<ProductThumbnailProps> = ({ productId, preview, name, price }) => {
  return (
    <S.ThumbnailWrapper to={`/product/${productId}`} draggable>
      <img src={preview} alt={name} width="148px" height="148px" />
      <S.ProductTitle>{name}</S.ProductTitle>
      <S.ProductPrice>${price}</S.ProductPrice>
    </S.ThumbnailWrapper>
  );
};

export default ProductThumbnail;
