let prompt = require('prompt-sync')();

let tarefas = [];
function adicionarTarefa() {
    const tarefa = prompt('Digite uma tarefa a ser adicionada na lista: ');
    const tarefaCapitalizada = tarefa.charAt(0).toUpperCase()+tarefa.slice(1).toLowerCase();
    if (tarefas.includes(tarefaCapitalizada)) {
        console.log('\nEssa tarefa já existe na lista.');
    } else if (tarefaCapitalizada) {
        tarefas.push(tarefaCapitalizada);
        console.log('\nA tarefa foi adicionada à lista com sucesso!');
    } else {
        console.log('\nO texto digitado não é válido.');
    }
}

function editarTarefa() {
    if(verificarTarefasVazia()){
        return;
    }
    const indexDaTarefa = parseInt(prompt('Digite o número da tarefa que deseja editar: ')) - 1;
    if (indexDaTarefa >= 0 && indexDaTarefa < tarefas.length) {
        console.log("");
        const tarefaEditada = prompt('Digite a nova descrição da tarefa: ');
        tarefas[indexDaTarefa] = tarefaEditada;
        console.log('\nTarefa editada com sucesso!');
    } else {
        console.log("\nTarefa não encontrada, verifique o número da tarefa digitado.");
    }
}

function removerTarefa() {
    if(verificarTarefasVazia()){
        return;
    }
    const indexDaTarefa = parseInt(prompt('Digite o número da tarefa que deseja remover: ')) - 1;
    if (indexDaTarefa >= 0 && indexDaTarefa < tarefas.length) {
        tarefas.splice(indexDaTarefa, 1);
        console.log('\nTarefa removida com sucesso!');
    } else {
        console.log("\nTarefa não encontrada, verifique o número da tarefa digitado.");
    }
}

function listarTarefas() {
    if (tarefas.length > 0) {
        console.log('\nA lista de tarefas atual é:');
        tarefas.forEach((tarefa, index) => {
            console.log(`${index + 1}. ${tarefa}`);
        });
    } else {
        console.log('\nA lista de tarefas está vazia no momento, que tal adicionar uma tarefa?');
    }
}

function obterId (){
    if(verificarTarefasVazia()){
        return;
    }
    const indexDaTarefa = parseInt(prompt('Digite o número da tarefa que você quer ver: ')) - 1;
    if (indexDaTarefa >= 0 && indexDaTarefa < tarefas.length) {
        console.log('A tarefa solicitada é:');
        console.log(`${tarefas[indexDaTarefa]}`);
    } else {
        console.log("\nTarefa não encontrada, verifique o número da tarefa digitado.");
    }
}

function reiniciarPrograma() {
    console.log('\nReiniciando o programa...');
    tarefas = [];
    console.log('');
    console.log('Bem Vinda(o) a ToDo List do Grupo 2!')
    adicionarTarefa();
    menu();
}

function sair() {
  process.exit(0);
}

function verificarTarefasVazia(){
    if (tarefas.length === 0) {
        console.log("\nNenhuma tarefa disponível na lista de Tarefas. Que tal adicionar uma tarefa?");
        return true;
    }
    listarTarefas();
    console.log("");
    return false;
}

function menu() {
  while (true) {
      console.log("\nEscolha uma opção:");
      console.log("1. Adicionar Tarefa");
      console.log("2. Editar Tarefa");
      console.log("3. Remover Tarefa");
      console.log("4. Listar Tarefas");
      console.log("5. Obter Tarefa por ID");
      console.log("6. Reiniciar programa");
      console.log("7. Sair");
      console.log("");
      const opcao = parseInt(prompt('Digite o número de uma das opções acima: '));
      switch (opcao) {
          case 1:
              adicionarTarefa();
              break;
          case 2:
              editarTarefa();
              break;
          case 3:
              removerTarefa();
              break;
          case 4:
              listarTarefas();
              break;
          case 5:
              obterId();
              break;
          case 6:
              reiniciarPrograma();
              break;
          case 7:
              console.log("Projeto desenvolvido por:");
              console.log("Bruno Souza, Christiane Barbosa, João Marcos, Marília Oliveira e Patrick Farias");
              console.log('\nFinalizando a aplicação.');
              sair();
              break;
          default:
              console.log('\nOpção Inválida. Digite o número de uma das opções da lista.');
      }
  }
}
console.log('')
console.log('Bem Vinda(o) a ToDo List do Grupo 2!')
console.log('');
adicionarTarefa();
menu();
