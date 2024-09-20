import express from "express";
import fs from "fs";
import crypto from "crypto";

const router = express.Router() 
const getCompliments = () => {
    const complimentData = JSON.parse(fs.readFileSync("./data/compliments.json", "utf-8"));
    return complimentData;
  };
router.get("/", (req, res) => {
    const compliments = getCompliments();
    res.json(compliments);
  });

  router.post("/", (req, res)=> {
    const body = req.body
    const id = crypto.randomUUID()
    // const date = Date.now()

    const newCompliment = {
        id:id, compliment:body.compliment
    }
    const compliments = getCompliments();
  compliments.push(newCompliment);
  fs.writeFileSync("./data/compliments.json", JSON.stringify(compliments));
  res.json(newCompliment);

  })

  export default router;

