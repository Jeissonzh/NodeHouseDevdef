const express = require("express");
const cors = require("cors")
const {connectDB} = require("./db/db");
const app = express();
const {inmuebles} = require("./routes/inmuebles")
connectDB();

app.use(express.json());
app.use(cors());
app.use('/inmuebles',inmuebles);

app.listen(3000,()=>{
    console.log("Estoy escuchando en el host: http://localhost:" + 3000);
});