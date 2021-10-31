export class StuffListComponent
{
    constructor(el)
    {
        this.el = el;
        this._btnNext = el.querySelector('button.btn_next');
        this._list = el.querySelector('ul.list');
        this._page = 0;
        this._btnNext.onclick = ()=>this.loadNext();        
    }

    async loadNext() {
        this._btnNext.disabled=true;
        try
        {
          const req = await fetch('/stuff/api/list?p='+(this._page+1));        
          const data = await req.text();
          if (data) this._list.innerHTML+=data;        
          this._page++;
        } catch (e) { console.error(e); }
        this._btnNext.disabled=false;
    }
}