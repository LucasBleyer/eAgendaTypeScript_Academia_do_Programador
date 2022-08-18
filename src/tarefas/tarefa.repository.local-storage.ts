import { IRepositorioSerializavel } from "../shared/repositorio-serializavel.interface.js";
import { IRepositorio } from "../shared/repositorio.interface.js";
import { Tarefa } from "./tarefa.model.js";

export class TarefaRepositorioLocalStorage implements IRepositorio<Tarefa>, IRepositorioSerializavel{
  
  private readonly localStorage: Storage;
  private readonly tarefas: Tarefa[];

  constructor(){
    this.localStorage = window.localStorage;
    this.tarefas = this.selecionarTdoso();
  }
  gravar(): void {
    const tarefasJsonString = JSON.stringify(this.tarefas);
    this.localStorage.setItem("tarefas", tarefasJsonString);
  }
  
  inserir(registro: Tarefa): void {
    this.tarefas.push(registro);
    this.gravar();
  }
  selecionarTdoso(): Tarefa[] {
    const dados = this.localStorage.getItem("tarefas");

    if(!dados)
      return[];
    else
      return JSON.parse(dados);
  }

}