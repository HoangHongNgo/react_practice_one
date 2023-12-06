import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../../services/service";
import { ProductResponse } from "../../types/product";
import Divider from "../../layouts/Divider";
import Quantity from "../../components/Quantity";
import { S } from "./styled";
import Typography from "../../components/Typography";

interface ProductDetailProps {
  addToCart: (product: ProductResponse, quantity: number) => Promise<void>;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ addToCart }) => {
  const { productId } = useParams<{ productId: string }>();
  const [product, setProduct] = useState<ProductResponse>();
  const [quantity, setQuantity] = useState<number>(1);

  const handleAddToCart = () => {
    if (product) {
      addToCart(product, quantity);
    }
  };

  useEffect(() => {
    if (productId) {
      getProductById(productId)
        .then((res) => {
          setProduct(res);
          console.log(res);
        })
        .catch(() => {
          console.error("Product detail not found");
        });
    }
  }, []);

  return (
    <S.DetailWrapper>
      <S.LeftWrapper>
        <img src={product?.preview} alt={product?.name} width="375px" height="375px" />
      </S.LeftWrapper>
      <S.RightWrapper>
        <S.TopInfo>
          <S.ProductTitle>{product?.name}</S.ProductTitle>
          <S.ProductPrice>${product?.price}</S.ProductPrice>
        </S.TopInfo>
        <S.QuantityWrapper>
          <Divider $width="375px" />
          <S.QuantityInfo>
            <Typography.H3>Quantity</Typography.H3>
            <Quantity quantity={quantity} setQuantity={setQuantity} />
          </S.QuantityInfo>
          <Divider $width="375px" />
        </S.QuantityWrapper>
        <S.ButtonGroup>
          <S.LightButton
            onClick={handleAddToCart}
            className="text text-green text-medium text-base"
          >
            Add to Cart
          </S.LightButton>
          <S.GreenButton className="text text-dark text-medium text-base" to="/">
            Buy Now
          </S.GreenButton>
        </S.ButtonGroup>
        <S.DetailInfoWrapper>
          <Typography.H3>Details</Typography.H3>
          <S.DetailInfo>{product?.detail}</S.DetailInfo>
        </S.DetailInfoWrapper>
      </S.RightWrapper>
    </S.DetailWrapper>
  );
};

export default ProductDetail;
