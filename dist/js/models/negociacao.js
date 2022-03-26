export class Negociacao{
    #data:
    #quantidade;
    #valor;

    constructor(){
        this.#data = data;
        this.#quantidade = quantidade;
        this.#valor = valor;
    }

    get data(){
        return this.#data;
    }
    
    get quantidade(){
        return this.#quantidade;
    }

    get valor(){
        return this.#valor;
    }

    get volumen(){
        return this.#quantidade * this.#valor;
    }
}