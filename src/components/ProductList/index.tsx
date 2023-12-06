import React, { useState, useEffect } from "react";
import { ProductResponse } from "../../types/product";
import { getProductByCategory } from "../../services/service";
import ProductThumbnail from "../ProductThumbnail";
import { S } from "./styled";

interface ProductListProps {
  cateId: string;
}

const ProductList: React.FC<ProductListProps> = ({ cateId }) => {
  const [productList, setProductList] = useState<ProductResponse[]>([]);

  useEffect(() => {
    getProductByCategory(cateId)
      .then((res) => {
        setProductList(res.product);
        console.log(res);
      })
      .catch((error) => {
        // Handle any errors here
        console.error(error);
      });
  }, [cateId]);

  return (
    <S.ListWrapper>
      {productList ? (
        productList.map((product) => (
          <ProductThumbnail
            productId={product.id}
            preview={product.preview}
            name={product.name}
            price={product.price}
          />
        ))
      ) : (
        <p>Loading...</p>
      )}
    </S.ListWrapper>
  );
};

export default ProductList;
