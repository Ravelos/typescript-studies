export class Negociacao{
    private data:Date;
    private valor:number;
    private quantidade:number;


    constructor(data:Date,quantidade:number,valor:number){
        this.data= data;
        this.quantidade = quantidade;
        this.valor = valor;
    }

    getdata(){
        return this.data;
    }
    
    getquantidade(){
        return this.quantidade;
    }

    getvalor(){
        return this.valor;
    }

    getvolumen(){
        return this.quantidade * this.valor;
    }
}