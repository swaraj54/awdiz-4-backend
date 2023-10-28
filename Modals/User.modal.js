import mongoose, { Schema } from "mongoose";
const user = new Schema({
    name: String,
    email: String,
    password: String,
    number: Number
})

export default mongoose.model("User", user);