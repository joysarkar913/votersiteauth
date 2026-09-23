const express = require("express");
const app = express();
const cors = require("cors");
app.use(express.json());
app.use(cors({ origin: "https://engineer-joy.web.app" }));
app.use(express.urlencoded({ extended: true }));

app.post("/",(req,res)=>{
    var details="false";
    if(req.body.promo==="joy"){
        details="true"
    }
    res.send(details)
})