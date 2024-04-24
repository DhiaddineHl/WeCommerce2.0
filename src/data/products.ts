
export interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    image_url: string;
    rating: number;
    bayer : Bayer;
}

export interface Bayer {
    id: number;
    firstName: string;
    lastNAme: string;
    avatar : {
        color : "gray" | "gold" | "bronze" | "brown" | "yellow" | "amber" | "orange" | "tomato" | "red" | "ruby" | "crimson" | "pink" | "plum" | "purple" | "violet" | "iris" | "indigo" | "blue" | "cyan" | "teal" | "jade" | "green" | "grass" | "lime" | "mint" | "sky";
        initials : string;
    }
}

export const Bayers : Bayer[] = [
    {
        id: 1,
        firstName: 'John',
        lastNAme: 'Doe',
        avatar: {
            color: 'blue',
            initials: 'JD'
        }
    },

    {
        id: 2,
        firstName: 'John',
        lastNAme: 'Smith',
        avatar: {
            color: 'red',
            initials: 'JS'
        }
    },
    {
        id: 3,
        firstName: 'Alex',
        lastNAme: 'Martin',
        avatar: {
            color: 'yellow',
            initials: 'AM'
        }
    }
];

export const products : Product[] = [
    {
        id: 1,
        name: 'Watch',
        description : 'Description of the product',
        price: 100,
        image_url : '/images/watch.jpg',
        rating: 4,
        bayer: Bayers[0]
    },
    {
        id: 2,
        name: 'Sun Glasses',
        description : 'Description of the product',
        price: 80,
        image_url : '/images/lunette.jpg',
        rating: 5,
        bayer: Bayers[1]
    },
    {
        id: 3,
        name: 'Camera',
        description : 'Description of the product',
        price: 300,
        image_url : '/images/camera.jpg',
        rating: 4,
        bayer: Bayers[2]
    },
    {
        id: 4,
        name: 'Shoe',
        description : 'Description of the product',
        price: 75,
        image_url : '/images/shoe.jpg',
        rating: 2,
        bayer: Bayers[0]
    },
    {
        id: 5,
        name: 'headphone',
        description : 'Description of the product',
        price: 120,
        image_url : '/images/headphone.jpg',
        rating: 4,
        bayer: Bayers[1]
    },
    {
        id: 6,
        name: 'Mini Car',
        description : 'Description of the product',
        price: 50,
        image_url : 'https://llzdzmpnnjsludfejqjp.supabase.co/storage/v1/object/public/wecommerce-products-images/test-url',
        rating: 5,
        bayer: Bayers[2]
    },

];
