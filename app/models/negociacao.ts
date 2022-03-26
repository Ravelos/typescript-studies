export class Negociacao{
    private data:Date;
    private valor:number;
    private quantidade:number;


    constructor(data:Date,quantidade:number,valor:number){
        this.data= data;
        this.quantidade = quantidade;
        this.valor = valor;
    }

    getData():Date{
        return this.data;
    }
    
    getQuantidade():number{
        return this.quantidade;
    }

    getValor():number{
        return this.valor;
    }

    getVolumen():number{
        return this.quantidade * this.valor;
    }
}