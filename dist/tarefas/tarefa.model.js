export class Tarefa {
    constructor(descricao, prioridade) {
        this.descricao = descricao;
        this.prioridade = prioridade;
        this.dataCriacao = new Date();
    }
}
