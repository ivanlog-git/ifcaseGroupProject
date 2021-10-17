
const stuffs=[];
let lastId=0;

class Stuff{

    static GetAll() {
        return stuffs;        
    }

    static GetWithId(id) {
        for(const s of stuffs)
        if (s.id==id) return s;
        return undefined;
    }

    constructor(name,desc,price,exist=true)
    {
        this.name=name;
        this.desc=desc;
        this.price=price;
        this.exist=exist;
    }
   
    save()
    {
        this.id = lastId+1;
        lastId=this.id;
        stuffs.push(this);
    }
}

module.exports = Stuff;