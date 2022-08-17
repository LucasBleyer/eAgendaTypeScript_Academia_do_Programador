import { IPaginaHTML } from "../shared/pagina.interface";

class TarefaPageList implements IPaginaHTML{
  tabela: HTMLTableElement;

  constructor(){
    this.configurarElementos();
  }

  configurarElementos(): void {
    this.tabela = document.getElementById("tabela") as HTMLTableElement;
  }

}