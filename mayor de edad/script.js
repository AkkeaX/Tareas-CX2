document.getElementById('ageForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const ageInput = document.getElementById('ageInput').value;
    const message = document.getElementById('message');
    
    if (ageInput >= 18) {
        document.body.classList.add('bg-green');
        document.body.classList.remove('bg-red');
        message.textContent = "Acceso concedido";
    } else {
        document.body.classList.add('bg-red');
        document.body.classList.remove('bg-green');
        message.textContent = "Acceso denegado";
    }
});
