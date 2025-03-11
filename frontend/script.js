document.addEventListener("DOMContentLoaded", () => {
    carregarCarros();
});

// Função para buscar e exibir os carros cadastrados
function carregarCarros() {
    fetch("http://localhost:3026/carros")
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                const main = document.querySelector("main");
                main.innerHTML = `
                    <table>
                        <tr>
                            <th>Placa</th>
                            <th>Senha</th>
                            <th>Ações</th>
                        </tr>
                    </table>
                `;

                const tabela = main.querySelector("table");
                
                data.data.forEach(carro => {
                    const row = document.createElement("tr");
                    row.innerHTML = `
                        <td><input type="text" value="${carro.license_plate}" id="placa-${carro.id}" disabled></td>
                        <td><input type="password" value="${carro.password}" id="senha-${carro.id}" disabled></td>
                        <td>
                            <button onclick="editarCarro(${carro.id})">Editar</button>
                            <button onclick="salvarEdicao(${carro.id})" style="display:none;">Salvar</button>
                            <button onclick="deletarCarro(${carro.id})">Deletar</button>
                        </td>
                    `;
                    tabela.appendChild(row);
                });
            }
        })
        .catch(error => console.error("Erro ao carregar carros:", error));
}

// Função para editar um carro (habilita edição)
function editarCarro(id) {
    document.getElementById(`placa-${id}`).disabled = false;
    document.getElementById(`senha-${id}`).disabled = false;

    const botoes = document.querySelectorAll(`button`);
    botoes.forEach(botao => {
        if (botao.innerText === "Salvar" && botao.onclick.toString().includes(`salvarEdicao(${id})`)) {
            botao.style.display = "inline";
        }
    });
}

// Função para salvar edição do carro
function salvarEdicao(id) {
    const novaPlaca = document.getElementById(`placa-${id}`).value;
    const novaSenha = document.getElementById(`senha-${id}`).value;

    fetch(`http://localhost:3026/carro/editar/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ license_plate: novaPlaca, password: novaSenha })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert("Registro atualizado com sucesso!");
            carregarCarros(); // Recarrega os dados
        } else {
            alert("Erro ao atualizar registro.");
        }
    })
    .catch(error => console.error("Erro ao atualizar carro:", error));
}

// Função para deletar um carro
function deletarCarro(id) {
    if (confirm("Tem certeza que deseja deletar este registro?")) {
        fetch(`http://localhost:3026/carro/deletar/${id}`, { method: "DELETE" })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    alert("Registro deletado com sucesso!");
                    carregarCarros();
                } else {
                    alert("Erro ao deletar registro.");
                }
            })
            .catch(error => console.error("Erro ao deletar carro:", error));
    }
}
