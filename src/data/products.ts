
interface Product {
    id: number;
    name: string;
    description?: string;
    price: number;
    image_url: string;

}

const products = [
    {
        id: 1,
        name: 'Product 1',
        description : 'Description of the product',
        price: 100,
        image_url : ''
    },
    {
        id: 2,
        name: 'Product 2',
        price: 200,
    },
    {
        id: 3,
        name: 'Product 3',
        price: 300,
    },
];
