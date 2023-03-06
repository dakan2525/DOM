const btn = document.querySelector('[data-from-btn]');

const createTask = (evento) => {
    evento.preventDefault();
    const input = document.querySelector('[data-from-input]');
    const value = input.value;
    const task = document.querySelector('[data-task]');
    input.value = '';
    const content = `<div>
    <i class="far fa-check-square icon"></i>
    <span class="task">${value}</span>
    </div>
    <i class="fas fa-trash-alt trashIcon icon"></i>`;

    task.innerHTML =content;

    console.log(content);

};



//listener, en este caso va a aser de tipó click// las funciones tipo arrow se hacer con => dando el mismo resultado que funcion
btn.addEventListener("click", createTask);


//clase02


