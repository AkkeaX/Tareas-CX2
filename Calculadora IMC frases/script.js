// function calcularIMC() {
//     const kilos = parseFloat(document.getElementById("kilos").value);
//     const metros = parseFloat(document.getElementById("metros").value);

//     if (kilos > 0 & metros > 0) {
//         const imc = kilos / (metros * metros);
//         document.getElementById("resultado").innerText = `Tu IMC es: ${imc.toFixed(2)}`;
//     } else {
//         document.getElementById("resultado").innerText = "Por favor, ingrese valores válidos.";
//     }
// }

function calcularIMC() {
    const kilos = parseFloat(document.getElementById("kilos").value);
    const metros = parseFloat(document.getElementById("metros").value);
    
    if (kilos > 0 && metros > 0) {
        const imc = kilos / (metros * metros);
        document.getElementById("resultado").innerText = `Tu IMC es: ${imc.toFixed(2)}`;
        let mensaje;
        if (imc < 18.5) {
            mensaje = "Tienes un peso inferior al normal. Es recomendable que busques asesoramiento para mejorar tu salud.";
        } else if (imc > 18.5 & imc < 24.9) {
            mensaje = "Tienes un peso normal. ¡Sigue así!";
        } else if (imc > 25 & imc < 29.9) {
            mensaje = "Tienes sobrepeso. Considera hacer cambios en tu dieta y actividad física.";
        } else {
            mensaje = "Tienes obesidad. Es recomendable que busques asesoramiento médico.";
        }
        document.getElementById("mensaje").innerText = mensaje;
    } else {
        document.getElementById("resultado").innerText = "Por favor, ingresa valores válidos.";
    }
}