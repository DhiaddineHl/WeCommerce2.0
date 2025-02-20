export interface Category {
    id: number;
    name: string;
    productListId: number
}

export interface ProductList {
    id: number;
    name: string;
    items: Product[]
}

export interface Product {
    id: number;
    name: string;
    imageName: string;
    price: number;
    discoutRate: number;
    review: number;
    description: string;
}

export interface Cart {
    id: string;
    total: number;
    subtotal: number;
    tax: number;
    items: CartItem[];
}

export interface CartItem {
    id: number;
    name : string;
    imageName: string;
    price: number;
    qty: number;
}


export interface Order {
    id: string;
    total: number;
    subtotal: number;
    tax: number;
    items: CartItem[];
    customer: Customer;
    paymentMethod: string;
}

export interface Customer {
    email: string;
    phone: string;
    note: string;
    buillingAddress: Address;
    shippingAddress: Address;
}

export interface Address {
    civility: string;
    firstName: string;
    lastName: string;
    zipCode: string;
    street: string;
    companyName: string;
    country: string;
    city: string;
}