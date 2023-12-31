export type Card = {
    id: string;
    number: number;
    cvv: number;
    expirity: string;
    money: number;
}

export type Client = {
    id: string;
    name: string;
    email: string;
    cards: Card[];
    orders: Order[];
};

export type Distributor = {
    id: string;
    name: string;
    orders: Order[];
}

export type Order = {
    id: string;
    id_client: string;
    id_restaurant: string;
    id_distributor: string;
    products: string[];
    price: number;
    status: string;
}

export type Restaurant = {
    id: string;
    name: string;
    address: string;
    cif: string;
    products: string[];
}