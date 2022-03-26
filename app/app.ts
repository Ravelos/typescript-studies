import { Negociacao } from "./models/negociacao";

const negociacao = new Negociacao(new Date(),10, 1000);
console.log(negociacao);
console.log(negociacao.getdata);