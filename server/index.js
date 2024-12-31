const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const route = require("./routes/authRoutes");
const bodyParser = require("body-parser");
dotenv.config()

const app = express();
const PORT = process.env.PORT || 3000;
const URL = process.env.MONGO_URL;
app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}));

app.get("/",(req,res)=>{
    res.send("Hello");
});

mongoose
    .connect(URL,{useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=>{
        console.log("DB Connected Successfully");
        app.listen(PORT,()=>{
            console.log(`Server is running on http://localhost:${PORT}`);
        });
    })
    .catch((err)=> console.error("Connection failed :", err));
app.use("/api",route)