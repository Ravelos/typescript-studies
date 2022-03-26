export class Negociacao {
    constructor(data, quantidade, valor) {
        this.data = data;
        this.quantidade = quantidade;
        this.valor = valor;
    }
    getData() {
        return this.data;
    }
    getQuantidade() {
        return this.quantidade;
    }
    getValor() {
        return this.valor;
    }
    getVolumen() {
        return this.quantidade * this.valor;
    }
}
