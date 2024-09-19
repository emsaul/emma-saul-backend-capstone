import express from "express";
import fs from "fs";
import crypto from "crypto";

const router = express.Router() 
const getCompliments = () => {
    const complimentData = JSON.parse(fs.readFileSync("./data/compliments.json"));
    return complimentData;
  };
router.get("/", (req, res) => {
    const compliments = getCompliments();
    res.json(compliments);
  });

  router.post("/", (req, res)=> {
    const body = req.body
    const id = crypto.randomUUID
    const title = req.body.title
    const channel = req.body.channel
    const description = req.body.description
    const date = Date.now()

    const newCompliment = {
        id:id, title:body.title, channel:body.channel, image:image, description: body.description, timestamp:date
    }
    const compliments = getCompliments();
  compliments.push(newCompliment);
  fs.writeFileSync("./data/compliments.json", JSON.stringify(compliments));
  res.json(newCompliment);

  })

  export default router;
