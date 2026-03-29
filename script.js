//variaveis de controle de interface
let seuVotoPara = document.querySelector('.d-1-1 span');
let cargo = document.querySelector('.d-1-2 span');
let descricao = document.querySelector('.d-1-4');
let aviso = document.querySelector('.d-2');
let lateral = document.querySelector('.d-1-right');
let numeros = document.querySelector('.d-1-3');

//variaveis de ambiente
let etapaAtual = 0;
let numero = '';

//está função: limpa a tela; pegar as informações da etapa atual; vai preencher o que precisa ser preenchido
function comecarEtapa() {
    let etapa = etapas[etapaAtual];
    let numeroHtml = '';

    for (let i = 0; i < etapa.numero; i++) {
        if (i === 0) {
            numeroHtml += '<div class="numero pisca"></div>';
        } else {
            numeroHtml += '<div class="numero"></div>';
        }
    }

    seuVotoPara.style.display = 'none';
    cargo.innerHTML = etapa.titulo;
    descricao.innerHTML = '';
    aviso.style.display = 'none';
    lateral.innerHTML = '';
    numeros.innerHTML = numeroHtml;

}

//funções

function atualizaInterFace() {
    alert("Finalizou a digitação do voto!");

}

function clicou(n) {
    let elNumero = document.querySelector('.numero.pisca');
    if (elNumero !== null) {
        elNumero.innerHTML = n;
        numero = `${numero}${n}`;

        elNumero.classList.remove('pisca');
        if (elNumero.nextElementSibling !== null) {
            elNumero.nextElementSibling.classList.add('pisca');
        }else{
            atualizaInterFace();
        }

    }
}
function branco(n) {
    alert('Clicou em BRANCO');
}
function corrige(n) {
    alert('Clicou em CORRIGE');
}
function confirma(n) {
    alert('Clicou em CONFIRMA');
}

comecarEtapa()