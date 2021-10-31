const express = require("express");
const hbs = require("hbs");
const cookieParser = require("cookie-parser");
const MongoClient = require("mongodb").MongoClient;

const stuffRouter = require("./routers/stuffRouter");

const Stuff = require("./models/Stuff");


new Stuff("Товар1","asd",12).save()
let s2 = new Stuff("Товар2","asd21",12).save();
new Stuff("Товар3","Что-то новое",12,false).save();
new Stuff("Товар4","Что-тasdо новое",132,false).save();
new Stuff("Товар5","Что-то asdasdновое",1322,false).save();
new Stuff("Товар6","Что-то dasdновое",112,false).save();
new Stuff("Товар7","Что-то ноasdasвоaе",17542,false).save();
new Stuff("Товар8","Что-asdaто новое",122,false).save();
new Stuff("Товар9","Что-тasdо новое",142,false).save();
new Stuff("Товар10","Что-то asdновое",162,false).save();



const port = 5000;
const app = express();

app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");


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

//Вставляем статику
app.use("/js", express.static(__dirname + "/htdocs/js"));
app.use("/css", express.static(__dirname + "/htdocs/css"));


///Вставляем куки
app.use(cookieParser());
///Вставляем сессии
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


app.use('/stuff', stuffRouter);

app.get("/",(req, resp)=>{
    const stuff=[];
    stuff.push({name:"Колеса",desc:"17'", exist:true});
    stuff.push({name:"Диски",desc:"16' литые", exist:true});
    stuff.push({name:"Подшипник",desc:"16033 износостойкий", exist:false});   
    resp.render('index.hbs',{title:"Детали", stuff});
})




/*
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
*/







