const numeroInput = document.getElementById('numero');
const resultadoElement = document.getElementById('resultado');

boton.addEventListener('click', (e) => {
    e.preventDefault();
    const numero = parseInt(numeroInput.value);
    let mensaje;

    if (numero > 0) {
        mensaje = `El número es positivo`;
    } else if (numero < 0) {
        mensaje = `El número es negativo`;
    } else {
        mensaje = `El número es igual a cero`;
    }

    resultadoElement.textContent = mensaje;
});     