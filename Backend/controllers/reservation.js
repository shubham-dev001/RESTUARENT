import ErrorHandler from "../error/error.js";
import { Reservation } from "../models/reservationSchema.js";

export const sendReservation = async (req, res, next) => {
        const { firstName, lastName, email, phone, time, date } = req.body;

        // Check for missing fields
        if (!firstName || !lastName || !email || !phone || !time || !date) {
            return next(new ErrorHandler("Please fill full reservation form!", 400));
        }
        try{
              // Create reservation
        await Reservation.create({firstName, lastName, email, phone, time, date});

        // Success response
        res.status(200).json({
            success: true,
            message: "Reservation sent successfully!",

        });

    }catch(error) {
                 // Validation errors

              if (error.name === "ValidationError") {
            const validationError = Object.values(error.errors).map(
                (err) => err.message
            );
            return next(new ErrorHandler(validationError.join(", "), 400));
        }
        next(error);
    }  
};
