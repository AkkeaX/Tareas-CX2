// function calcularIMC() {
//     const kilos = parseFloat(document.getElementById("kilos").value);
//     const metros = parseFloat(document.getElementById("metros").value);
    
//     if (kilos > 0 && metros > 0) {
//         const imc = kilos / (metros * metros);
//         document.getElementById("resultado").innerText = `Tu IMC es: ${imc.toFixed(2)}`;
//         let mensaje;
//         let backgroundPosition;

//         if (imc < 18.5) {
//             mensaje = "Tienes un peso inferior al normal. Es recomendable que busques asesoramiento para mejorar tu salud.";
//             backgroundPosition = '4%';
//         } else if (imc >= 18.5 && imc < 24.9) {
//             mensaje = "Tienes un peso normal. ¡Sigue así!";
//             backgroundPosition = '34%';
//         } else if (imc >= 25 && imc < 29.9) {
//             mensaje = "Tienes sobrepeso. Considera hacer cambios en tu dieta y actividad física.";
//             backgroundPosition = '64%';
//         } else {
//             mensaje = "Tienes obesidad. Es recomendable que busques asesoramiento médico.";
//             backgroundPosition = '94%';
//         }

//         document.getElementById("mensaje").innerText = mensaje;

//         const hijoDiv = document.getElementById("hijo");
//         hijoDiv.style.backgroundPosition = backgroundPosition;

//         hijoDiv.style.display = 'block';

//     } else {
//         document.getElementById("resultado").innerText = "Por favor, ingresa valores válidos.";
//     }
// }

function calcularIMC() {
    const kilos = parseFloat(document.getElementById("kilos").value);
    const metros = parseFloat(document.getElementById("metros").value);
    
    if (isNaN(kilos) || isNaN(metros) || kilos <= 0 || metros <= 0) {
        document.getElementById("resultado").innerText = "Por favor, ingresa valores válidos.";
        document.getElementById("mensaje").innerText = ""; // Limpiar mensaje anterior
        return; // Salir de la función si la entrada no es válida
    }

    const imc = kilos / (metros * metros);
    document.getElementById("resultado").innerText = `Tu IMC es: ${imc.toFixed(2)}`;
    
    let mensaje;
    let backgroundClass;

    if (imc < 18.5) {
        mensaje = "Tienes un peso inferior al normal. Es recomendable que busques asesoramiento para mejorar tu salud.";
        backgroundClass = 'bajo-peso'; // Clase CSS para bajo peso
    } else if (imc >= 18.5 && imc < 24.9) {
        mensaje = "Tienes un peso normal. ¡Sigue así!";
        backgroundClass = 'peso-normal'; // Clase CSS para peso normal
    } else if (imc >= 25 && imc < 29.9) {
        mensaje = "Tienes sobrepeso. Considera hacer cambios en tu dieta y actividad física.";
        backgroundClass = 'sobrepeso'; // Clase CSS para sobrepeso
    } else {
        mensaje = "Tienes obesidad. Es recomendable que busques asesoramiento médico.";
        backgroundClass = 'obesidad'; // Clase CSS para obesidad
    }

    document.getElementById("mensaje").innerText = mensaje;

    const hijoDiv = document.getElementById("hijo");
    hijoDiv.className = backgroundClass; // Cambiar clase en lugar de backgroundPosition
    hijoDiv.style.display = 'block';
}