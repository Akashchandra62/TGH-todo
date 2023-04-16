import express from "express";
import dotenv from "dotenv";
import {connectDB} from "./database/connection.js";
import bodyParser  from 'body-parser';
import Todo from "./database/models/todo.js";
import authRoutes from "./Routes/authRoutes.js"
import todoRoutes from "./Routes/todoRoutes.js"
import cookieParser from "cookie-parser"
const PORT = process.env.PORT || 3000;
const app = express();
dotenv.config();
app.use(express.static('public'))
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
connectDB();                        //Connecting to Database;
app.set('view engine', 'ejs');      // Setting EJS as templating engine


app.get("/", async (req, res) => {
    res.render('login')
})

app.use(authRoutes);
app.use(todoRoutes);


app.listen(PORT, () => {
    console.log(`Server started on PORT ${PORT}`);
})