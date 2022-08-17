import { Prioridade } from "./prioridade.enum";

export class Tarefa{
  public descricao: string;
  public dataCriacao: Date;
  public dataConclusao?: Date;
  public prioridade: Prioridade;

  constructor(descricao: string, prioridade: Prioridade){
    this.descricao = descricao;
    this.prioridade = prioridade;

    this.dataCriacao = new Date();
  }
}