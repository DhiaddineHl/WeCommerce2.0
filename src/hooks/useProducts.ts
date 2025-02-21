import apiClient from "../services/apiClient"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { Product } from "./models";


const fetchProducts = () => {

    const fetchProducts = () =>
        apiClient
        .get<Product[]>("/products")
        .then(res => res.data)

    return useQuery<Product[]>({
        queryKey : ["products"],
        queryFn : fetchProducts
    })

}

const fetchProductById = (id: number) => {
    
    const fetchProduct = () =>
        apiClient
        .get<Product[]>("/products/", {
            params: { id }
        })
        .then(res => res.data)

    return useQuery<Product[]>({
        queryKey : ["products", id],
        queryFn : fetchProduct
    })
}


export default {
    fetchProductById,
    fetchProducts
}