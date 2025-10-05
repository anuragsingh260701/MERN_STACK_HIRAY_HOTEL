import express from "express";
import { Reservation } from "../models/reservation.js";

const router = express.Router();

router.post("/send", async (req, res, next) => {
  const { firstName, lastName, email, phone, date, time, guests } = req.body;

  if (!firstName || !lastName || !email || !phone || !date || !time || !guests) {
    return next(new Error("Please fill full reservation form!"));
  }

  try {
    await Reservation.create({
      firstName,
      lastName,
      email,
      phone,
      date,
      time,
      guests,
    });

    res.status(200).json({
      success: true,
      message: "Reservation Sent Successfully!",
    });
  } catch (error) {
    if (error.name === "ValidationError") {
      const validationErrors = Object.values(error.errors).map(
        (err) => err.message
      );
      return next(new Error(validationErrors.join(", ")));
    }
    return next(error);
  }
});

export default router;
