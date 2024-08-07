var cxPrincipal = document.querySelector(".cx-principal");
var cxPerguntas = document.querySelector(".cx-perguntas");
var cxAlternativas = document.querySelector(".cx-alternativas");
var cxResultado = document.querySelector(".cx-resultado");
var txResultado = document.querySelector(".tx-resultado");
var perguntas = [
    {
        enunciado: "A IA pode automatizar tarefas repetitivas.",
        alternativas: [
                

            {
                texto:"vai eliminar tarefas monotonas",
                afirmação:"Não o IA vai simplificar"
            },
            {
                texto:"Vai tirar muitos empregos",
                afirmação:"Sim,depende da área se pode ser substituida por um IA"
            },
        ]
    },
    {
        enunciado: "A IA pode tomar decisões baseadas em dados.",
        alternativas: [
 {
          Texto:"vai ser Maravilhoso",
          afirmação:"Sim ira ajudar em muitas tarefas"
 },
 {
           Texto:" vai ser Assustador",
           afirmação:"Sera assustador porque e algo novo "

 }
        ]
    },
    {
        enunciado: "A IA pode substituir certos empregos.",
        alternativas: [
            {
            texto:"Não vejo problemas",
            afirmação:"depende o emprego "
            },
{
          texto:  "É o fim dos empregos como conhecemos hoje",
          afirmação:"não sera o fim"
},
        ]
    },
    {
        enunciado: "A IA pode ajudar a prever tendências de mercado.",
        alternativas: [
         { 
           texto:" vai ser Incrível",
            afirmação:"sim com base no alise de dados "
         },
           {
           texto: "vai ser Sinistro",
afirmação:""afirmação:"não, sera algo novo "
           },

        ]
    },
    {
        enunciado: "A IA pode trabalhar 24/7 sem pausas.",
        alternativas: [
{
         texto:   "serà Surpreendente",
         afirmação:"Acredito que sim",
},
{
           texto: "tera Mão de obra barata",
           afirmação:"Nãosssssssss",
},sss
        ]
    }
];

var posiçãoAtual = 0;
var perguntaAtual;

mostraPergunta();

function mostraPergunta(){
    perguntaAtual = perguntas[posiçãoAtual];
    cxPerguntas.textContent = perguntaAtual.enunciado;
    mostraAlternativas();
}

function mostraAlternativas() {
    for (var alternativa of perguntaAtual.alternativas) {
        var botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa;
        cxAlternativas.appendChild(botaoAlternativas);
    }
}