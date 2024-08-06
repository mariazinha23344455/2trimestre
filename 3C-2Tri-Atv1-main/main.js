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
                afirmação:""
            },
            {
                texto:"Vai tirar muitos empregos",
                afirmação:""
            },
        ]
    },
    {
        enunciado: "A IA pode tomar decisões baseadas em dados.",
        alternativas: [
 {
          Texto:"vai ser Maravilhoso",
          afirmação:""
 },
 {
           Texto:" vai ser Assustador",
           afirmação:""

 }
        ]
    },
    {
        enunciado: "A IA pode substituir certos empregos.",
        alternativas: [
            {
            texto:"Não vejo problemas",
            afirmação:""
            },
{
          texto:  "É o fim dos empregos como conhecemos hoje",
          afirmação:""
},
        ]
    },
    {
        enunciado: "A IA pode ajudar a prever tendências de mercado.",
        alternativas: [
         { 
           texto:" vai ser Incrível",
            afirmação:""
         },
           {
           texto: "vai ser Sinistro",
afirmação:""
           },

        ]
    },
    {
        enunciado: "A IA pode trabalhar 24/7 sem pausas.",
        alternativas: [
{
         texto:   "serà Surpreendente",
         afirmação:"",
},
{
           texto: "tera Mão de obra barata",
           afirmação:"",
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