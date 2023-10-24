let prompt = require('prompt-sync')();

let tarefas = [];

adicionarTarefa();
function adicionarTarefa() {
    let tarefa = prompt('Digite uma tarefa a ser adicionada na lista: ');
    if (tarefa) {
        tarefas.push(tarefa);
        console.log('\nA tarefa foi adicionada à lista com sucesso!');
    } else {
        console.log('\nO texto digitado não é válido.')
    }
}



function reiniciarPrograma() {
  tarefas = [];
  console.log('\nReiniciando o programa...');
}

function sair() {
  process.exit(0);
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
              obterTarefaPorId();
              break;
          case 6:
              reiniciarPrograma();
              break;
          case 7:
              console.log('\nFinalizando a aplicação.');
              sair();
              break;
          default:
              console.log('\nOpção Inválida. Digite o número de uma das opções da lista.');
      }
  }
}

menu();
