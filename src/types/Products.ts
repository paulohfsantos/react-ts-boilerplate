export interface IProduct {
  id: number;
  name: string;
  price: number;
  description: string;
  categories: string;
  quantity: number;
}

export type ProductRequest = Omit<IProduct, "id">;