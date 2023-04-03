import * as mongoose from 'mongoose';

export const BookSchema = new mongoose.Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String, required: true },
    status: { type: Number, default: 0 },
}); 

export interface bookInterface {
    title: string,
    author: string,
    price: number,
    category: string,
}

