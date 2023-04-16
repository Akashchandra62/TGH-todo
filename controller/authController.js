import User from "../database/models/user.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

export const login = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if(!user) return res.redirect("/")
    let isPasswordTrue = await  bcrypt.compare(password, user.password);
    if (!isPasswordTrue) {
      return res.redirect("/");
    }
    const Token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    res.cookie(`token`, Token);
    res.redirect("/home");
  }

export const registration = async (req, res) => {
    let { name, email, password } = req.body;
  
    password = await bcrypt.hash(password, 10);
  
    const user = await User.create({
      name,
      email,
      password,
    });
  
    const Token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
  
    res.cookie(`token`, Token);
    res.redirect("/home");
  }