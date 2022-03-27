export class Negociacao{   


    constructor(
        private _data:Date,
        private _quantidade:number,
        private _valor:number
        ){}

    get Volumen():number{
        return this._quantidade * this._valor;
    }

    get data(): Date {
        const data = new Date(this._data.getTime());
        return this.data;
    }
}