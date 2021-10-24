
const stuffs=[];
let lastId=0;

class Stuff{

    static GetAll() {
        return stuffs;        
    }

    static GetStuffs(skip=0, limit=0) {
        const result = stuffs.slice(skip, skip+limit);
        return result;        
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

    validate()
    {
        if (!this.name) return "Name not valid";
        if (!this.desc) return "Description not valid";
        if (!this.price) return "Price not valid";
        return true;
    }
}

module.exports = Stuff;