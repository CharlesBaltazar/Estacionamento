async function cadastrar(event) {
    event.preventDefault();

    const license_plate = document.getElementById('placa').value;
    const password = document.getElementById('senha').value;

    const data = {license_plate, password}
    const response = await fetch('http://localhost:3026/carro/cadastrar', {
        method: "POST",
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify(data)
    })

    const results = await response.json();

    if(results.success) {
        window.location.href = './login.html'
        
    } else{
        const mensagem = document.getElementById('mensagemErro')
        mensagem.textContent = 'Ocorreu um erro durante o cadastro. Tente novamente'
        mensagem.style.display = 'block'
    }
}