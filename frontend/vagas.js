// //Função para trocar a cor da vaga quando selecionada
// document.querySelectorAll('.botao-vaga').forEach(botao => { //Seleciona todas as vagas
//     botao.addEventListener('click', function(event) {
//         event.preventDefault()
//         const selecionado = document.querySelector('.botao-vaga') //Remove seleção da vaga anterior
//         if(selecionado) {
//             selecionado.classList.remove('selecionada')
//         }
//     });
// });

// //Função para identificar vaga ocupada
// async function vagas(event) {
//     event.preventDefault();
//     const vagaSelecionada = document.querySelector('.botao-vaga')
//     const carroData = JSON.parse(localStorage.getItem('informacoes')); //Recupera infos do carro
//     console.log(carroData)
//     console.log(vagaSelecionada)
//     console.log(vagaSelecionada.getAttribute('data-identificador'))

//     if (vagaSelecionada) {
//         vagaSelecionada.style.backgroundColor = 'gray'
//         fetch('http://localhost:3026/vaga/editar', {
//             method:"PUT",
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({
//                 occupied: true,
//                 vehicle_id: carroData.id,
//                 id: vagaSelecionada.getAttribute('data-identificador')
//             })
//         })
//         .then(response => response.json())
//         .then(results =>{
//             if(results.success) {
//                 alert('Vaga ocupada com sucesso')

//             }
//         })
// } 
// };

// //Função para listar vagas ocupadas e IDs dos carros
// // async function listarVagasOcupadas() {
// //     const response = await fetch ('http://localhost:3025/vagas')
// //     const tabela = document.getElementById('tabelaCarros')
// //     const results = await response.json() 
// //     results.data.forEach(element => {
// //         const row = document.createElement('tr')
// //         //refatorando o null do preferencial para 'não'
// //         if(element.tipo_pref == null){
// //             element.tipo_pref = 'não'
// //         }
// //         row.innerHTML = `
// //         <td>${element.identificador}</td> 
// //         <td>${element.tipo_vaga}</td> 
// //         <td>${element.tipo_pref}</td> 
// //         <td>${element.carro_id}</td> 

// //         <td>
// //             <button onclick="desocuparVaga('${element.identificador}')" class='deletarBtn'>Desocupar</button>
// //         </td>
// //         `
// //         tabela.appendChild(row)    
// //     });
// // }