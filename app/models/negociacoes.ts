import { Negociacao } from './negociacao.js';

export class Negociacoes {
  private negociacoes: Array<Negociacao> = [];

  adiciona(negociacao: Negociacao): void {
    this.negociacoes.push(negociacao);
  }

  // o retorno ReadonlyArray<Negociacao> é um array somente leitura
  lista(): ReadonlyArray<Negociacao> {
    return this.negociacoes;
  }
}