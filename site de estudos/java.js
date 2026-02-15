let temaAtual = "";
let redacaoCompleta = "";

function definirTema() {
    temaAtual = document.getElementById("temaInput").value;
    document.getElementById("titulo").innerText =
        "Mapa Mental de Redação: " + temaAtual;
}

function toggle(element) {
    const ul = element.parentElement.querySelector("ul");
    if (ul) ul.classList.toggle("hidden");
}

function mostrarTexto(tipo) {

    const textos = {

        dudh: `Segundo a Declaração Universal dos Direitos Humanos, todos nascem livres e iguais em dignidade. Entretanto, no contexto de ${temaAtual}, tal princípio nem sempre é efetivado.`,

        constituicao: `A Constituição Federal assegura direitos fundamentais. Contudo, ao analisar ${temaAtual}, percebe-se a fragilidade dessas garantias.`,

        filosofo: `Para Bauman, a modernidade líquida gera instabilidade social, o que se relaciona diretamente com ${temaAtual}.`,

        serie: `Na série Black Mirror, observa-se uma crítica aos impactos sociais, o que dialoga com ${temaAtual}.`,

        tese: `${temaAtual} é um desafio estrutural que exige intervenção social e institucional.`,

        antecipacao: `Essa problemática decorre da omissão estatal e da fragilidade das políticas públicas relacionadas a ${temaAtual}.`,

        dev1: `Em primeiro lugar, é necessário analisar como ${temaAtual} se estrutura socialmente.`,

        dev2: `Além disso, é fundamental compreender os impactos coletivos de ${temaAtual}.`,

        conclusao: `Portanto, cabe ao Estado promover ações eficazes para enfrentar ${temaAtual}, garantindo equidade social.`
    };

    document.getElementById("textoArea").innerHTML =
        `<textarea id="textoAtual">${textos[tipo]}</textarea>
         <br>
         <button onclick="adicionarRedacao()">Adicionar à Redação</button>`;
}

function adicionarRedacao() {

    const texto = document.getElementById("textoAtual").value;

    redacaoCompleta += texto + "\n\n";

    document.getElementById("redacaoFinal").value = redacaoCompleta;
}
