export interface ProductResponse {
  id: number;
  categoryId: number;
  name: string;
  preview: string;
  price: number;
  detail: string;
}

export interface ProductByCategoryResponse {
  id: number;
  image: string;
  name: string;
  product: ProductResponse[];
}
