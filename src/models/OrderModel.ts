import { User } from "../models/UserModel";
import { BasketProductSummary } from "./BasketProductSummaryModel";

export interface Order {
  id: number;
  user: User;
  products: BasketProductSummary[];
  price: number;
}
