import mongoose from "mongoose";
import validator from "validator";

const reservationSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minlength: [3, "first name contain at least 3 character!"],
        maxlength: [30, "first name cannot exceeed 30 character!"],
    },
    
    lastName: {
        type: String,
        required: true,
        minlength: [3, "last name contain at least 3 character!"],
        maxlength: [30, "last name cannot exceeed 30 character!"],
    },
    
    email: {
        type: String,
        required: true,
        validate: [validator.isEmail, "provide a valid email"],
    },
    phone: {
        type: String,
        required: true,
        minlength: [10, "phone number contain at least 10 digit!"],
        maxlength: [10, "phone number cannot exceeed 10 digit!"],
    },
    time: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true,
    }
});

export const Reservation = mongoose.model("Reservation", reservationSchema)