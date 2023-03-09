const form = document.getElementById('agenda-contatos');
const nome = [];
const numero = [];

let linhas = '';
form.addEventListener('submit', function(e){
    e.preventDefault()

    adicionarLinha()
    atualizarAgenda()

});

function adicionarLinha(){
    const inputNomePessoa = document.getElementById('nome-pessoa');
    const inputNumeroPessoa = document.getElementById('numero-pessoa');

    nome.push(inputNomePessoa.value);
    numero.push(inputNumeroPessoa.value);

    let linha = '<tr>';
    linha += `<td> ${inputNomePessoa.value}</td>`;
    linha += `<td> ${inputNumeroPessoa.value}</td>`;
    linha += '<tr>'

    linhas += linha

    inputNomePessoa.value = '';
    inputNumeroPessoa.value = '';
};

function atualizarAgenda(){
    const corpoAgenda = document.querySelector('tbody')
    corpoAgenda.innerHTML = linhas
}