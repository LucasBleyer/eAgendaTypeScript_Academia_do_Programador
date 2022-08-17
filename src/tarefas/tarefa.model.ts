import { EntidadeBase } from "../shared/entidade.model.js";
import { Prioridade } from "./prioridade.enum.js";

export class Tarefa extends EntidadeBase{
  public descricao: string;
  public dataCriacao: Date;
  public prioridade: Prioridade;

  constructor(descricao: string, prioridade: Prioridade){
    super();
    this.descricao = descricao;
    this.dataCriacao = new Date();
    this.prioridade = prioridade;
  }
}