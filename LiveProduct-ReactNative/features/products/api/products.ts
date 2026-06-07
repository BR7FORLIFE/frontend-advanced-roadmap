import { api } from "../../../core/api/axios.config";

interface ProductModel {
  id: string;
  name: string;
  price: number;
}

interface ProductsResponse {
  products: ProductModel[];
}

const paths = {
    products: {
        path: "/products",
    },
};

async function GetAllProducts() {
    const result = await api.get<ProductsResponse>(paths.products.path);
    return result.data.products;
}

export { GetAllProducts };
