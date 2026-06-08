import { api } from "../../../core/api/axios.config";

interface ProductModel {
    id: string;
    name: string;
    price: number;
    url: string;
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

async function ViewProduct(id: string) {
    await api.get(`${paths.products.path}/${id}`);
}

export { GetAllProducts, ViewProduct };
