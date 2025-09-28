import mongoose, { Schema } from "mongoose";


const UserSchema = new Schema ({
    name: String,
    email: {
        type : String,
        unique: true,
        required: [true, "Email is necesarry!!!"],
    },
    password: {
        type: String,
        require: [true, "password is required "],
    },
    about: String,
    profileURL: String,
});

export const User =  mongoose.models.users || mongoose.model('users', UserSchema);
