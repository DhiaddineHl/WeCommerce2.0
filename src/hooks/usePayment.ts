import { useQueryClient, useMutation } from "@tanstack/react-query";
import apiClient from "../services/apiClient";
import { PaymentCreationRequest } from "./utils/PaymentCreationRequest";
import { useCookies } from "react-cookie";


const createPayment = () => {

    const [cookies, setCookie] = useCookies(["paymentId"])

    return useMutation({
        mutationFn : (request : PaymentCreationRequest) =>
        apiClient.post<number>("/payment/classic/create", request)
        .then(res => {
            setCookie('paymentId', res.data, {sameSite: "none", secure:true})
        }),
        onSuccess : () => {
            window.location.href = 'http://localhost:3001/login-particular'
        }
    })

}

export default createPayment;