import { createContext } from "react";
import { IProduct } from "../../types/Products";

interface ProductsContext {
  products: IProduct[];
  productList: () => Promise<void>;
  productView: (id: number) => Promise<void>;
  excludeProduct: (id: number) => Promise<void>;
  addProduct: (product: IProduct) => Promise<void>;
  updateProduct: (product: IProduct) => Promise<void>;
}

export const ProductsContext = createContext<ProductsContext>({} as ProductsContext);