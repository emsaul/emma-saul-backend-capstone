import express from "express";
import cors from "cors";
import complimentRoutes from "./routes/complimentRoutes.js";

const app = express()

app.use(cors())
app.use(express.json())

app.use("/compliments", complimentRoutes)

app.listen(5050, ()=> 
    console.log("app running")
)