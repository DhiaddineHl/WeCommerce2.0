import { useMutation } from "@tanstack/react-query";
import apiClient from "../services/apiClient";
import { PaymentCreationRequest } from "./utils/PaymentCreationRequest";

import Cookies from 'universal-cookie';
import paymentClient from "../services/paymentClient";

const createPayment = () => {

    const cookies = new Cookies();

    return useMutation({
        mutationFn : (request : PaymentCreationRequest) =>
        paymentClient
        .post<number>("payment/classic/create", request)
        .then(res => {
            console.log(res.data);
            
            cookies.set('paymentId', res.data, {sameSite: "none", secure:true})
        }),
        onSuccess : () => {
            // window.location.href = 'http://localhost:3001/login-particular'
        }
    })

}

export default createPayment;