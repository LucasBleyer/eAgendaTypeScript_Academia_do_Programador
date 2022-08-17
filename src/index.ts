import { IPaginaHTML } from "./shared/pagina.interface.js";

class Index implements IPaginaHTML{

  constructor(){
    this.configurarElementos();
  }
  
//metodo responsável pelo data binding da página
  public configurarElementos(): void {
  }
}

new Index();