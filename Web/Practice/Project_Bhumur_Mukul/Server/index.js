const express = require('express')
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

// Middleware
app.use(cors());
app.use(bodyParser.json());

app.post("/mukul",(req,res)=>{
    console.log(req.body);
    res.send("Server Started....")
})

app.listen(5000, ()=>{console.log(`Server Started at 3000`)});

