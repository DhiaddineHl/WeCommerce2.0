import apiClient from "../services/apiClient"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { ProductCreationRequest } from "./utils/ProductCreationRequest";
import { useNavigate } from "react-router-dom";

interface Product {
    id : number;
    name : string;
    description : string;
    price : number;
    rating : number;
    image_url : string;
    sellerId : number;

}

const fetchProductsBySeller = () => {

    const fetchProducts = () =>
    apiClient
    .get<Product[]>("/products/seller-token")
    .then(res => res.data)

    return useQuery<Product[]>({
        queryKey : ["products"],
        queryFn : fetchProducts
    })
}

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

const fetchProduct = () => {

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
    fetchProductsBySeller,
    fetchProduct,
    createProduct,
    fetchProducts
}