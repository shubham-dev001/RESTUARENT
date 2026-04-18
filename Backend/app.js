import express from "express";
import cors from "cors";
import dotenv from "dotenv"
import { dbConnection } from "./Database/dbConnection.js";
import { errorMiddleware } from "./error/error.js";
import reservationRouter from "./routes/reservationRouter.js";

const app = express();
dotenv.config({ path: "./config/config.env" });

app.use(
    cors({
        origin: "https://restuarent-frontend.onrender.com",
        methods: ["POST"],
        credentials: true,

    }),
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/reservation", reservationRouter);

dbConnection();


app.use(errorMiddleware);

export default app;