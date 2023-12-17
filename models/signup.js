import mongoose from "mongoose";

const signupstructure = new mongoose.Schema({
   name:String,
   email:String,
   phone:String,
   password:String,
 
    

});

export const signupmodel = mongoose.model("signup",signupstructure);