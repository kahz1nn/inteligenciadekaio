const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "okaio é um cara bacana?",
        alternativas: [
            {
                texto:"alem de bacana é bunito",
                afirmacao:""
            },
            {
                texto:"tem os seus defeitos mas é um cara nota 10",
                afirmacao:""
            }
           
        ]
    },
    {
        enunciado: "vcs acha que a terra é plana?",
        alternativas: [
            {
                texto:"não que ridiculo",
                afirmacao:""
            },
            {
                texto: "sim acredito que a terra é plana e que navega num vacuo em cima de uma especie de tartaruga gigante que faz o sistema solar rodr em volta de ti",
                afirmacao:""
            }
           
        ]
    },
    {
        enunciado: "se vc fosse atacado por um tigre oque vc faria?",
        alternativas: [
            {
                texto:" falaria pare esta doendo",
                afirmacao:""
            },
            {
                texto:"calcularia uma raiz quadrada para achar o valor x",
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