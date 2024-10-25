const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Quais são as principais causas das enchentes urbanas?",
        alternativas: [
            {
                texto:"A impermeabilização do solo devido à construção de estradas e prédios impede que a água da chuva seja absorvida, levando ao acúmulo de água nas ruas e a enchentes.",
                afirmacao:""
            },
            {
                texto:"A falta de manutenção e a obstrução das redes de drenagem urbana podem causar o transbordamento de córregos e bueiros, resultando em enchentes nas áreas urbanas.",
                afirmacao:""
            }
           
        ]
    },
    {
        enunciado: "Como as enchentes afetam a infraestrutura de uma cidade?",
        alternativas: [
            {
                texto:"Enchentes podem danificar estradas, pontes e edifícios, resultando em altos custos de reparo e interrupções significativas nos serviços e transporte.",
                afirmacao:""
            },
            {
                texto: "Além dos danos físicos, enchentes podem comprometer o fornecimento de água e energia, causar problemas em sistemas de esgoto e gerar riscos à saúde pública devido ao contágio de doenças.",
                afirmacao:""
            }
           
        ]
    },
    {
        enunciado: "Quais são algumas medidas eficazes para prevenir enchentes?",
        alternativas: [
            {
                texto:"A construção de sistemas de drenagem eficientes e a implementação de soluções baseadas na natureza, como parques e áreas verdes, podem ajudar a reduzir o risco de enchentes.",
                afirmacao:""
            },
            {
                texto:"A educação pública sobre práticas de conservação e o controle do uso do solo para evitar a impermeabilização excessiva são estratégias importantes para a prevenção de enchentes.",
                afirmacao:""
            }
            
            
        ]
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();