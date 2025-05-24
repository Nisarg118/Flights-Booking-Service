const express = require("express");

const { BookingController } = require("../../controllers");
const router = express.Routuer();

router.post("/", BookingController.createBooking);

module.exports = router;
