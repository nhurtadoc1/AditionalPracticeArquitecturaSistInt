import mongoose from "mongoose";
import { Card, Client, Order } from "../types.ts";
const Schema = mongoose.Schema;

const ClientSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, unique: true, required: true, validate: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/ },
    cards: { type: Array<Card>, required: false, unique: false, ref: "Card" },
    orders: { type: Array<Order>, required: false, unique: false, ref: "Order" },
});

export type ClientModelType = mongoose.Document & Omit<Client, "id" >;

export const ClientModel = mongoose.model<ClientModelType>(
    "Client",
    ClientSchema
);