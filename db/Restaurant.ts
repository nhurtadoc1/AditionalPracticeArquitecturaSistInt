import mongoose from "mongoose";
import { Restaurant } from "../types.ts";
const Schema = mongoose.Schema;

const RestaurantSchema = new Schema({
    name: { type: String, required: true, unique: true },
    address: { type: String, required: true, validate: /(Calle|Avenida|Plaza) ([A-Za-z]+ )+[0-9]{1,3}( [0-9]+o( \w+)?)?/ },
    cif: { type: String, required: true, unique: false, validate: /([A-H]|J|N|[P-S]|[U-W])([0-9][0-8]|[0-579]9)([0-9]{6})/ },
    product: { type: Array<string>, required: false, unique: false },
});

export type RestaurantModelType = mongoose.Document & Omit<Restaurant, "id" >;

export const RestaurantModel = mongoose.model<RestaurantModelType>(
    "Restaurant",
    RestaurantSchema
);