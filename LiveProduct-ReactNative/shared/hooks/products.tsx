import { useQuery } from "@tanstack/react-query";
import { GetAllProducts } from "../../features/products/api/products";

export function useProducts() {
  return useQuery({
    queryKey: ["getAll"],
    queryFn: GetAllProducts,
  });
}
