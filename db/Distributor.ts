import mongoose from "mongoose";
import { Distributor, Order } from "../types.ts";
const Schema = mongoose.Schema;

const DistributorSchema = new Schema({
    username: { type: String, required: true, unique: true },
    orders: { type: Array<Order>, required: false, unique: false, ref: "Order" },
});

export type DistributorModelType = mongoose.Document & Omit<Distributor, "id" >;

export const DistributorModel = mongoose.model<DistributorModelType>(
    "Distributor",
    DistributorSchema
);