const express = require("express");
const cookieParser = require("cookie-parser");
const MongoClient = require("mongodb").MongoClient;


const port = 5000;
const app = express();
const jsonParser = express.json();

let dbClient;
const mongoClient = new MongoClient("mongodb://127.0.0.1:27017");

mongoClient.connect(function(err, client){      
 
    if(err) return console.log(err);
      
    const db = client.db("ifcase_group_project");
    app.locals.sessions = db.collection("sessions");    
    app.listen(port, ()=>{console.log("Server listen at "+port.toString())});   
});

function generateSid()
{
    let sid="s";
    for(let i=0;i<64;i++)
        sid+=(Math.trunc(Math.random()*17)).toString(16);
    return sid;
}

app.use(cookieParser());
app.use(async (req, resp, next)=>{
    let sid = req.cookies.sid;
    if (!sid) 
    {
        sid = generateSid();
        resp.cookie("sid", sid);        
    }
    let session = await req.app.locals.sessions.findOne({sid:sid});
    if (!session) 
    {
        session={sid:sid, counter:0};
        req.app.locals.sessions.insertOne(session);
    }
    req.session = session;
    console.log(JSON.stringify(session));
    next();    
})



app.get("/",(req, resp)=>{    
    resp.sendFile(__dirname+'/htmls/index.html');
})


app.get("/counter",(req, resp)=>{     
    req.session.counter++;
    resp.send(JSON.stringify({counter:req.session.counter}));
    console.log("Counter");    
})


app.get("/loadstate",(req, resp)=>{   
    resp.send(JSON.stringify({counter:req.session.counter}));    
})


app.post("/savestate", jsonParser, async (req, resp)=>{
    try
    {        
        let reqObj = req.body;                
        if (!reqObj) throw new Error("Wrong format");
        if (!reqObj.counter) throw new Error("Wrong data format");
        let newCounter=parseInt(reqObj.counter.toString());

        let newSession = await req.app.locals.sessions.findOneAndUpdate({sid:req.session.sid},{$set:{counter:newCounter}});        
        req.session=newSession;
        resp.send(JSON.stringify({error:0}));
    } catch (error)
    {
        resp.send(JSON.stringify({error:error.toString()}));    
    } 
})








