// Lembrando assim que fizer o clone, so da um npm i prompt-sync para instalar o pacote do prompt;

//Não esquecer do .gitignore para não comitar a pasta node_modules;

// so criar um arquivo .gitignore e colocar dentro dele /node_modules/ que vai ser izi

const prompt = require('prompt');

const tasks = [];
let taskId = 1;

async function addTask() {
    const { description } = await prompt.get(['description']);

    if (tasks.some(task => task.description === description)) {
        console.log('Essa tarefa já existe.');
    } else {
        tasks.push({ id: taskId++, description });
        console.log('Tarefa adicionada com sucesso!');
    }

    showMenu();
}

async function editTask() {
    const { id, description } = await prompt.get(['id', 'description']);
    const taskId = parseInt(id);
    const task = tasks.find(t => t.id === taskId);
    if (task) {
        task.description = description;
        console.log('Tarefa editada com sucesso');
    } else {
        console.log('iiiii, não foi encontrada.');
    }
    showMenu();
}

async function removeTask() {
    const { id } = await prompt.get(['id']);
    const taskId = parseInt(id);
    const index = tasks.findIndex(t => t.id === taskId);
    if (index !== -1) {
        tasks.splice(index, 1);
        console.log('Tarefa removida!');
    } else {
        console.log('Tarefa não encontrada.');
    }
    showMenu();
}

function listTasks() {
    console.log('Tarefas:');
    tasks.forEach(task => {
        console.log(`ID: ${task.id}, Descrição: ${task.description}`);
    });
    showMenu();
}

async function getTaskById() {
    const { id } = await prompt.get(['id']);
    const taskId = parseInt(id);
    const task = tasks.find(t => t.id === taskId);
    if (task) {
        console.log(`ID: ${task.id}, Descrição: ${task.description}`);
    } else {
        console.log('Tarefa não encontrada.');
    }
    showMenu();
}

async function showMenu() {
    console.log('\nEscolha uma opção:');
    console.log('1. Adicionar Tarefa');
    console.log('2. Editar Tarefa');
    console.log('3. Remover Tarefa');
    console.log('4. Listar Tarefas');
    console.log('5. Obter Tarefa por ID');
    console.log('6. Sair');

    const { option } = await prompt.get(['option']);
    const choice = parseInt(option);
    switch (choice) {
        case 1:
            await addTask();
            break;
        case 2:
            await editTask();
            break;
        case 3:
            await removeTask();
            break;
        case 4:
            listTasks();
            break;
        case 5:
            await getTaskById();
            break;
        case 6:
            console.log('Saindo...');
            process.exit();
            break;
        default:
            console.log('Opção inválida. Tente novamente usando as opções acima.');
            await showMenu();
    }
}

console.log('Bem-vindo à ToDo List Grupo 2\n');
showMenu();