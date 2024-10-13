
//PASSO 1 - precisamos criar uma variável no JS pra trabalhar com a listagem de beyblade

const listaSelecaoBeyblades = document.querySelectorAll(".beyblade");

//PASSO 2 - Identificar o evento de clique no elemento da listagem

listaSelecaoBeyblades.forEach(beyblade => {
    beyblade.addEventListener("click", () => {
        //PASSO 3 - remover a classe aberto só do cartão que tá aberto

        const beybladeAberto = document.querySelector(".aberto");
        beybladeAberto.classList.remove("aberto")
        //PASSO 4 - ao clicar em um pokedev da lista pegamos o id desse beyblade pra saber qual cartão abrir 

        const idBeybladeSelecionada = beyblade.attributes.id.value;
        const idBeybladeParaAbrir = "bey-" + idBeybladeSelecionada;
        const BeybladeParaAbrir = document.getElementById(idBeybladeParaAbrir);
        BeybladeParaAbrir.classList.add("aberto");

        //PASSO 5 - remover a classe ativo que marca o pokedev selecionado na listagem

        const beybladeAtivoNaListagem = document.querySelector(".ativo");
        beybladeAtivoNaListagem.classList.remove("ativo");

        //PASSO 6 - adicinar a classe ativo no pokedev selecionado na listagem

        const beybladeSelecionadaNaListagem = document.getElementById(idBeybladeSelecionada)
        beybladeSelecionadaNaListagem.classList.add("ativo");


    })
})