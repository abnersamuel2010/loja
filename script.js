function pagina() {
    fetch('dados.json')
        .then(response => response.json())
        .then(dadinho => {
            document.getElementById('destino').innerHTML =
                `<div class="card">
                <img src="img/`+ dadinho.imagem + `" class="imagem_produto" alt="">
                <h3>`+ dadinho.nome + `</h3>
                <p class="d_produto">`+ dadinho.descricao + `</p>
                <p class="p_produto">R$ `+ dadinho.preco + `</p>
                <p class="botao_card"><a class="letra_botao" href="`+ dadinho.endereco + `">Saiba Mais</a></p>
            </div>`;
        })
}