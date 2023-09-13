export class Negociacoes {
    constructor() {
        this.negociacoes = [];
    }
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    // o retorno ReadonlyArray<Negociacao> é um array somente leitura
    lista() {
        return this.negociacoes;
    }
}
