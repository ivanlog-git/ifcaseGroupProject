
const Stuff = require("../models/Stuff");


exports.getAll= function (req, resp){
    let stuffs=Stuff.GetAll();
    resp.render('stuffList.hbs',{stuffs});
}

exports.getItem= function(req, resp){
    let stuff = Stuff.GetWithId(req.params.id);
    console.log(JSON.stringify(stuff));
    if (stuff) 
        resp.render('stuff.hbs',stuff); else
        resp.render('404.hbs');        
}

exports.showCreateItem = function(req, resp){
    resp.render('createStuffForm.hbs');
}

exports.createItem = function(req, resp){
    if(!req.body) return resp.sendStatus(400);
    const data=req.body;
    let newStuff = new Stuff(data.name, data.description, data.price);    
    newStuff.exist = data.available;
    const validResult = newStuff.validate();
    if (validResult!==true) return resp.sendStatus(422);
    newStuff.save();
    resp.redirect(`/stuff/item${newStuff.id}`)
}
