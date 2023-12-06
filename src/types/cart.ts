import { ProductResponse } from "./product";

export interface CartResponse {
  id: number;
  userId: number;
  products: ICartItem[];
}

export interface ICartItem {
  product: ProductResponse | undefined;
  quantity: number;
}

export interface AddressResponse {
  id: number;
  userId: number;
  name: string;
  phone: string;
  address: string;
  district: string;
  city: string;
  fee: number;
}

export interface AddressForm extends Omit<AddressResponse, "id"> {
  id?: number;
}

export interface District {
  id: number;
  name: string;
  fee: number;
}

export interface CityResponse {
  id: number;
  name: string;
  districts: District[];
}

export interface OrderBody {
  userId: number;
  address: AddressResponse;
  products: ICartItem[];
  shipping: number;
  total: number;
}
