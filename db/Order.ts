import mongoose from "mongoose";
import { Order } from "../types.ts";
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
    id_client: { type: Schema.Types.ObjectId, required: true, ref: "Client" },
    id_restaurant: { type: Schema.Types.ObjectId, required: true, ref: "Restaurant" },
    id_distributor: { type: Schema.Types.ObjectId, required: true, ref: "Distributor" },
    products: { type: Array<string>, unique: true, required: true },
    price: { type: Number, required: false, unique: false, min:0 },
    status: { type: String, required: false, unique: false, validate: /(Pending|Finished)/ },
});

export type OrderModelType = mongoose.Document & Omit<Order, "id" >;

export const OrderModel = mongoose.model<OrderModelType>(
    "Order",
    OrderSchema
);