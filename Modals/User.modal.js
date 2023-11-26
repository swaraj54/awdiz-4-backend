import mongoose, { Schema } from "mongoose";

const user = new Schema({
    name: {
        type: String
    },
    email: String,
    password: String,
    cart: [String],
    number: Number
})

export default mongoose.model("User", user);