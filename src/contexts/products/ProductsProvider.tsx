import { FC, PropsWithChildren, useReducer } from "react";
import { IProduct, ProductRequest } from "../../types/Products";
import { ProductsContext } from "./ProductsContext";
import { ProductService } from "../../services/products";
import { productsReducer } from "./productReducer";

export const ProductsProvider: FC<PropsWithChildren> = ({ children }) => {
  const [products, dispatch] = useReducer(
    productsReducer,
    []
  );

  const productList = async () => {
    const { data } = await ProductService.getProducts();
    dispatch({ type: "GET_PRODUCTS", payload: data });
  };

  const productView = async (id: number) => {
    const { data } = await ProductService.getProduct(id);
    dispatch({ type: "VIEW_PRODUCT", payload: data });
  };

  const addProduct = async (product: ProductRequest) => {
    const { data } = await ProductService.createProduct(product);
    dispatch({ type: "CREATE_PRODUCT", payload: data });
  };

  const updateProduct = async (product: IProduct) => {
    const { data } = await ProductService.updateProduct(product);
    dispatch({ type: "UPDATE_PRODUCT", payload: data });
  };

  const excludeProduct = async (id: number) => {
    await ProductService.deleteProduct(id);
    dispatch({ type: "DELETE_PRODUCT", payload: id });
  };

  const values = {
    products,
    productList,
    productView,
    addProduct,
    updateProduct,
    excludeProduct,
  };

  return (
    <ProductsContext.Provider value={values}>{children}</ProductsContext.Provider>
  );
}