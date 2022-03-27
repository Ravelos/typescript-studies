import { Negociacao } from "./negociacao.js";

export class Negociacoes{
    private negociacoes: Negociacao [] = [];

    adiciona(negociacao:Negociacao){
        this.negociacoes.push(negociacao);
    }

    lista(): readonly Negociacao []{
        return this.negociacoes;
    }
}

// Negociacao[] is equal to Array <Negociacao>
// redonly Negociacao [] is equal to ReadOnly Array <Negociacao>