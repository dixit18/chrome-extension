const express = require('express');
const app = express()
const mongoose = require('mongoose');
const dotenv = require('dotenv')
dotenv.config();
const authRoute  = require("./routes/auth")
const userRoute = require("./routes/users")

const movieRoute = require("./routes/movies");
const listRoute = require("./routes/lists");

// mongodb+srv://dixitparmar6113:<password>@cluster0.ponlncd.mongodb.net/?retryWrites=true&w=majority


mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>console.log("DB Connected")).catch(err => console.log(err));
app.use(express.json())

app.use("/api/auth",authRoute)
app.use("/api/users", userRoute);
app.use("/api/movies", movieRoute);
app.use("/api/lists", listRoute);

app.listen(8802,()=>{
    console.log("Backend Server is running!")
})