function busca_alunos(){
    fetch('dados.json')
        .then(response => response.json())
        .then(ddd => {
        tablet = document.getElementById('lugar');
        ddd.forEach(pessoainha => {
            let linha = document.createElement('tr');
            linha.innerHTML =
                "<td>" + pessoainha.produto + "</td>" +
                "<td>" + pessoainha.preco + "</td>" +
                "<td>" + pessoainha.imagem + "</td>"+
                "<td>" + pessoainha.descricao + "</td>";
            tablet.appendChild(linha);
        });

})
}