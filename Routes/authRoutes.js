import express from "express";
const route = express.Router();
import { login, registration } from "../controller/authController.js";

route.get("/registration", (req, res) => {
  res.render("registration");
});

route.post("/registration", registration);

route.post("/login", login);
route.get("/logout", async (req, res) => {
    res.clearCookie("token")
    res.redirect("/")
});

export default route;
