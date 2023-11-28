import { LoginResponse } from "../types/auth";
import { AddressResponse, CartResponse, ICartItem, OrderBody } from "../types/cart";
import { CategoryResponse } from "../types/category";
import { ProductByCategoryResponse, ProductResponse } from "../types/product";
import { apiRequest } from "../utils/apiRequest";
import { HttpMethod } from "../utils/enums";

export const loginService = (email: string, password: string) => {
  return apiRequest<LoginResponse, { email: string; password: string }>(
    "http://localhost:3000/login",
    HttpMethod.POST,
    {
      email: email,
      password: password,
    }
  );
};

export const getCategory = () => {
  return apiRequest<CategoryResponse[]>("http://localhost:3000/category", HttpMethod.GET);
};

export const getProductByCategory = (cateId: string) => {
  return apiRequest<ProductByCategoryResponse>(
    `http://localhost:3000/category/${cateId}?_embed=product`,
    HttpMethod.GET
  );
};

export const getProductById = (productId: string) => {
  return apiRequest<ProductResponse>(`http://localhost:3000/product/${productId}`, HttpMethod.GET);
};

export const getCartByUserId = (userId: string, token: string) => {
  return apiRequest<CartResponse[]>(
    `http://localhost:3000/600/carts?userId_like=${userId}`,
    HttpMethod.GET,
    undefined,
    token
  );
};

export const getAddressByUserId = (userId: string, token: string) => {
  return apiRequest<AddressResponse[]>(
    `http://localhost:3000/600/address?userId_like=${userId}`,
    HttpMethod.GET,
    undefined,
    token
  );
};

export const addOrder = (
  userId: number,
  address: AddressResponse,
  cart: ICartItem[],
  total: number,
  token: string
) => {
  return apiRequest<OrderBody, OrderBody>(
    `http://localhost:3000/600/order/`,
    HttpMethod.POST,
    {
      userId: userId,
      address: address,
      product: cart,
      total: total,
    },
    token
  );
};
