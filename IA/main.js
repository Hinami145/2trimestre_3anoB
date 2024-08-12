const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
const caixaResultado1 = document.querySelector(".caixa-principal");

const perguntas = [
    {
        enunciado: "A  tecnologia pode ajudar deficientes visuais a entender filmes de heróis?  ",
        alternativas: [
            {
                texto: "Sim,é claro.",
                afirmacao: "com a tecnologia, plataformas como a google podem descrever filmes de super heróis para as pessoas."
            },
            {
                texto: "Não",
                afirmacao: "Mesmo que descrito, seria confuso e não teria uma descrição tão detalhada. "
            }
        ] 
    },
    {
        enunciado: "Heróis com deficiência visual podem usar  a tecnologia a seu favor?",
        alternativas: [
            {
                texto: "Sim.",
                afirmacao: "Com o uso de sensores com som, o herói pode saber onde o inimigo está e se tem algo que está prestes a atingir ele. "
            },
            {
                texto: "Não",
                afirmacao: "Talvez por conta dela, o herói pode revelar sua localização facilmente."
            }
        ]
    },
   
        {
            enunciado: "Como a tecnologia impulsiona heróis com deficiência visual nas redes?",
            alternativas: [
                {
                    texto: "Fãs na rede.",
                    afirmacao: "Impulsionamento nas redes por conta dos fãs, melhora a imagem do herói e deixa-o com mais reconhecimento."
                },
                {
                    texto: "Jornais e notícias.",
                    afirmacao: "O jornalismo pode contribuir também, entretanto de forma positiva ou negativa."
                }
            ]
        },
    ]
let atual = "0";
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

    
}
  mostraPergunta();
