import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/apiClient";
import { ProductList } from "./models";



const getProductListByName = (name: string) => {
    const fetchProductList = () => 
        apiClient.get<ProductList[]>("/productLists", {
            params: { name }
        }).then(res => res.data);

    return useQuery<ProductList[]>({
        queryKey: ["productsList", name], // Ensures a new query is created when name changes
        queryFn: fetchProductList,
        // staleTime: 0, // Forces refetching when changing name
        // refetchOnMount: true, // Ensures new data is fetched when component mounts
        // refetchOnWindowFocus: false // Optional: Prevents refetch on window focus
    });
};


export default {
    getProductListByName
}