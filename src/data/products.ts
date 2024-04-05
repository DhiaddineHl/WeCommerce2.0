
interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    image_url: string;
    rating: number;

}

export const products : Product[] = [
    {
        id: 1,
        name: 'Watch',
        description : 'Description of the product',
        price: 100,
        image_url : '/images/watch.jpg',
        rating: 4
    },
    {
        id: 2,
        name: 'Sun Glasses',
        description : 'Description of the product',
        price: 80,
        image_url : '/images/lunette.jpg',
        rating: 5
    },
    {
        id: 3,
        name: 'Camera',
        description : 'Description of the product',
        price: 300,
        image_url : '/images/camera.jpg',
        rating: 4
    },
    {
        id: 4,
        name: 'Shoe',
        description : 'Description of the product',
        price: 75,
        image_url : '/images/shoe.jpg',
        rating: 2
    },
    {
        id: 5,
        name: 'headphone',
        description : 'Description of the product',
        price: 120,
        image_url : '/images/headphone.jpg',
        rating: 4
    },
    {
        id: 6,
        name: 'Mini Car',
        description : 'Description of the product',
        price: 50,
        image_url : '/images/mini-car.jpg',
        rating: 5
    },

];
