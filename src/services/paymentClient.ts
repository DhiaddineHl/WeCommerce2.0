import axios from "axios";
import Cookies from 'universal-cookie';

const cookies = new Cookies();
const token = cookies.get('wecommerce_access_token');

const paymentClient = axios.create({
    baseURL : "http://localhost:8070/api/v1/",
    // headers : {
    //     "Authorization" : `Bearer ${token}`
    // }
});

export default paymentClient;