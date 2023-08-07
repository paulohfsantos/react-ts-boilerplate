import { AxiosResponse } from "axios";
import { api } from "../api";
import { IProduct, ProductRequest } from "../types/Products";

export const ProductService = {
  getProducts: async (): Promise<AxiosResponse<IProduct[]>> => {
    const response = await api.get("/products");
    return response;
  },

  getProduct: async (id: number): Promise<AxiosResponse<IProduct>> => {
    const response = await api.get(`/products/${id}`);
    return response;
  },

  deleteProduct: async (id: number): Promise<AxiosResponse<IProduct[]>> => {
    const response = await api.delete(`/products/${id}`);
    return response;
  },

  createProduct: async (product: ProductRequest): Promise<AxiosResponse<IProduct>> => {
    const response = await api.post(`/products`, product);
    return response;
  },

  updateProduct: async (product: IProduct): Promise<AxiosResponse<IProduct>> => {
    const response = await api.put(`/products/${product.id}`, product);
    return response;
  }
}