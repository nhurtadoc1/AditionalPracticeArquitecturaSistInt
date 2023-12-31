import mongoose from "mongoose";
import { Card } from "../types.ts";
const Schema = mongoose.Schema;

const CardSchema = new Schema({
    number: { type: Number, required: true, unique: true, min: 1000000000000000, max: 9999999999999999},
    cvv: { type: Number, required: true, min:0, max:999 },
    expirity: { type: String, required: true, unique: false, validate: /(0[1-9]|1[0-2])\/20(2[4-9]|[3-9][0-9])/ },
    money: { type: Number, required: true, unique: false, min:0 },
});

export type CardModelType = mongoose.Document & Omit<Card, "id" >;

export const CardModel = mongoose.model<CardModelType>(
    "Card",
    CardSchema
);