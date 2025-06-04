const express = require('express')
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.json());

app.post('/fruit',async(req,res)=>{
    console.log("hi server")
    try{
        const data = req.body;
        console.log(data)
        // for(let i of data){
        //     console.log(i);
        // }
    }catch(error){
        res.status(400).send({ error: 'Error creating user', details: error });
    }
})

app.listen(5000,()=>{
    console.log("Server is listning on port 5000")
})