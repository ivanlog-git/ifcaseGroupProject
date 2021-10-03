const express = require("express");

const port = 5000;
const app = express();
const jsonParser = express.json();



app.use((req, resp, next)=>{
    console.log("Middleware");        
    next();
    console.log("Middleware 2");    
})



app.get("/",(req, resp)=>{    
    resp.sendFile(__dirname+'/htmls/index.html');
})


let counter=10;

app.get("/counter",(req, resp)=>{    
    counter++;    
    resp.send(JSON.stringify({counter}));
    console.log("Counter");    
})


app.get("/loadstate",(req, resp)=>{   
    resp.send(JSON.stringify({counter}));    
})


app.post("/savestate", jsonParser, (req, resp)=>{
    try
    {        
        let reqObj = req.body;                
        if (!reqObj) throw new Error("Wrong format");
        if (!reqObj.counter) throw new Error("Wrong data format");
        counter = parseInt(reqObj.counter.toString());
        resp.send(JSON.stringify({error:0}));
    } catch (error)
    {
        resp.send(JSON.stringify({error:error.toString()}));    
    } 
})



app.listen(port, ()=>{console.log("Server listen at "+port.toString())});




