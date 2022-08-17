import { EntidadeBase } from "../shared/entidade.model.js";
export class Tarefa extends EntidadeBase {
    constructor(descricao, prioridade) {
        super();
        this.descricao = descricao;
        this.dataCriacao = new Date();
        this.prioridade = prioridade;
    }
}
