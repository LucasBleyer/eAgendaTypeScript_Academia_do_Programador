class Index {
    constructor() {
        this.configurarElementos();
    }
    //metodo responsável pelo data binding da página
    configurarElementos() {
        this.btnCadastrar = document.getElementById("btnCadastrar");
        this.btnCadastrar.addEventListener("click", () => console.log("clicado"));
    }
}
new Index();
export {};
