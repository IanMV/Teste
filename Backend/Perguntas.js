document.addEventListener('keydown', (event) => {
    let verificador2 = false;
    if (event.key === "Backspace") {
        verificador2 = true;
    };if (verificador2 === true) {
        console.log("Formulário resetado.");
        localStorage.clear()
    }
  });

const altura = document.getElementById('altura');
const peso = document.getElementById('peso');
const nome = document.getElementById('nome');
const esporte = document.getElementsByName('exercicio');
const lesao = document.getElementsByName('lesao');
const button = document.getElementById('button');
const segundoNome = document.getElementById('segundoNome');

button.addEventListener('click', function () {
    if (altura.value === '' || peso.value === '' || nome.value === '') {
        alerta.innerHTML = '<div class="alertaOk"><p>Preencha todos os dados.</p><button class="botaoOk"  onclick="voltar()">Ok</button></div>';
        return;
    };

    let esporteSelecionado = '';
    let lesaoSelecionada = '';
    for (let i = 0; i < esporte.length; i++) {
        if (esporte[i].checked) {
            esporteSelecionado = esporte[i].value;
        };
    };
    for (let i = 0; i < lesao.length; i++) {
        if (lesao[i].checked) {
            lesaoSelecionada = lesao[i].value;
        };
    };

    if (esporteSelecionado === '' || lesaoSelecionada === '') {
        alert('Por favor, selecione pelo menos um esporte e uma lesão.');
        return;
    };
    localStorage.setItem('formRespondido', true);
    localStorage.setItem('esporteSelecionado', esporteSelecionado);
    localStorage.setItem('lesaoSelecionada', lesaoSelecionada);
    localStorage.setItem('nomeUsuario', nome.value);
    localStorage.setItem('segundoNomeUsuario', segundoNome.value);
    nome.value = "";
    peso.value = "";
    altura.value = "";
    redirecionar();
});

let alerta = document.getElementById('alerta');
let semCliques = document.getElementById('semCliques');

function confirmarSaida() {
    alerta.innerHTML = '<div class="divAlerta"><p>Tem certeza que deseja sair?<span> O formulário será resetado.</span></p><button class="voltar" onclick="voltar()">Voltar</button><button onclick="paginaPrincipal()" class="sair"><a  href="../../../index.html">Sair</a></button></div>';
    semCliques.classList.add('semCliques');
};

function voltar() {
    alerta.innerHTML = '';
    semCliques.classList.remove('semCliques');
};

function redirecionar() {
    url = 'Exercicios.html';
    window.location.href = url;
};

function paginaPrincipal() {
    window.location.href = '../../../index.html'
};