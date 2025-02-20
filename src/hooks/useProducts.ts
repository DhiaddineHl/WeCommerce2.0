import apiClient from "../services/apiClient"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { ProductCreationRequest } from "./utils/ProductCreationRequest";
import { useNavigate } from "react-router-dom";
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

const createProduct = () => {

    const queryClient = useQueryClient();
    const navigate = useNavigate();

    return useMutation({
        mutationFn : (request : ProductCreationRequest) =>
        apiClient.post("/products", request)
        .then(res => res.data),
        onSuccess : () => {
            queryClient.invalidateQueries({
                queryKey : ["products"]
            
            }),
            navigate("/")
        }
    })

}

export default {
    fetchProductById,
    createProduct,
    fetchProducts
}