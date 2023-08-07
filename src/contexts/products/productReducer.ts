import { IProduct } from "../../types/Products";

type Action = {
  type: "GET_PRODUCTS" | "CREATE_PRODUCT" | "UPDATE_PRODUCT" | "DELETE_PRODUCT" | "VIEW_PRODUCT";
  payload: IProduct[] | IProduct | number;
};

export const productsReducer = (state: IProduct[], action: Action): IProduct[] => {
  switch (action.type) {
    case "GET_PRODUCTS":
      return action.payload as IProduct[];
    case "CREATE_PRODUCT":
      return [...state, action.payload as IProduct];
    case "UPDATE_PRODUCT":
      return state.map((product) => {
        if (product.id === (action.payload as IProduct).id) {
          return action.payload as IProduct;
        }
        return product;
      });
    case "DELETE_PRODUCT":
      return state.filter((product) => product.id !== action.payload);
    default:
      return state;
  }
}