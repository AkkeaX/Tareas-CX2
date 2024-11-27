function calcularIMC() {
    const kilos = parseFloat(document.getElementById("kilos").value);
    const metros = parseFloat(document.getElementById("metros").value);

    if (kilos > 0 & metros > 0) {
        const imc = kilos / (metros * metros);
        document.getElementById("resultado").innerText = `Tu IMC es: ${imc.toFixed(2)}`;
    } else {
        document.getElementById("resultado").innerText = "Por favor, ingrese valores válidos.";
    }
}