import mongoose from "mongoose";

const shoeStructure = new mongoose.Schema({
    title: String,
    description: String,
    price: String,
    productImage:{
        type:String,
    }
    
}); 

export const shoeModel = mongoose.model("shoe", shoeStructure);