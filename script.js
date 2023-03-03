const btn = document.querySelector('[data-from-btn]');

const createTask = (evento) => {
    evento.preventDefault();
    const input = document.querySelector('[data-from-input]');
    console.log(input.value);
};

console.log(btn);


//listener, en este caso va a aser de tipó click// las funciones tipo arrow se hacer con => dando el mismo resultado que funcion
btn.addEventListener("click", createTask);



