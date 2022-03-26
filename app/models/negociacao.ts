export class Negociacao{
    private data:Date;
    private valor:number;
    private quantidade:number;


    constructor(data:Date,quantidade:number,valor:number){
        this.data= data;
        this.quantidade = quantidade;
        this.valor = valor;
    }

    getData(){
        return this.data;
    }
    
    getQuantidade(){
        return this.quantidade;
    }

    getValor(){
        return this.valor;
    }

    getVolumen(){
        return this.quantidade * this.valor;
    }
}