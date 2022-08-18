export class TarefaRepositorioLocalStorage {
    constructor() {
        this.localStorage = window.localStorage;
        this.tarefas = this.selecionarTodos();
    }
    gravar() {
        const tarefasJsonString = JSON.stringify(this.tarefas);
        this.localStorage.setItem("tarefas", tarefasJsonString);
    }
    inserir(registro) {
        this.tarefas.push(registro);
        this.gravar();
    }
    selecionarTodos() {
        const dados = this.localStorage.getItem("tarefas");
        if (!dados)
            return [];
        else
            return JSON.parse(dados);
    }
}
