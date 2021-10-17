
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

exports.createItem = function(req, resp){
    let newStuff = new Stuff("name","desc","price");
    newStuff.save();
    resp.send('Товар создан: '+JSON.stringify(newStuff));
}
