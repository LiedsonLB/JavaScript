document.addEventListener("DOMContentLoaded", () => {
    // elementos de adicionar imovel
const nome = document.getElementById("nome");
const preco = document.getElementById("preco");
const localizacao = document.getElementById("localizacao");
const descricao = document.getElementById("descricao");


const search = document.getElementById("search");

const imoveisContainer = document.getElementById("imoveisContainer");

const imoveis = [];

// conteiner do imoveis
const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
    e.preventDefault()
    if(nome.value.trim() != "" && preco.value.trim() != "" && localizacao.value.trim() != "" && descricao.value.trim() != ""){
        imoveis.push(
            {
                nome: nome.value, 
                preco: preco.value, 
                localizacao: localizacao.value, 
                descricao: descricao.value,
            });
            // Chama a função "updateInfoDisplay" para atualizar a exibição das informações.
            updateInfoDisplay();
    } else {
        alert("Preencha todos os campos sobre o imovel !!");
    }
})

search.addEventListener("input", () => {
    updateInfoDisplay();
})

function updateInfoDisplay() {
    const searchTerm = search.value.trim().toLowerCase();

    imoveisContainer.innerHTML = "";

    imoveis.forEach((imovel) => {
        if(imovel.nome.toLowerCase().includes(searchTerm)){
            var newImovel = document.createElement("div");
            newImovel.innerHTML = 
            `<h4>${imovel.nome}</h4>
            <p>${imovel.localizacao}</p>
            <h3>${imovel.preco}</h3>
            <p>${imovel.descricao}</p>
            `

            imoveisContainer.appendChild(newImovel);
        }
    })
}
})