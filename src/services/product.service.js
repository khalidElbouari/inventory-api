import { selectAllProducts } from "../repositories/product.repository.js";

export async function getAllProducts() {
  let data = await selectAllProducts();
  return JSON.parse(data);
}
