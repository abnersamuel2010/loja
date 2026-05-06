 async function pagina() {
    const destino = document.getElementById('destino');
    try{
        const response = await fetch('dados.json'); 
        
        if (!response.ok) throw new Error('Falha ao carregar dados');

        const paginas = await response.json();

        destino.innerHTML='';

        paginas.forEach(item => {
            const card = document.createElement('div');
            card.className = 'card';

            card.innerHTML = `
                <img src="img/${item.imagem}" alt="Foto de ${item.nome}" alt="">
                <h3></h3>
                <p id="p_produto"></p>
                <p id="d_produto"></p>
                <a href="${item.endereco}">
                    <button type="button">Saiba mais</button>
                </a>
            `;

            card.querySelector('h3').textContent = item.nome;
            card.querySelector("d_produto").textContent = item.preco;
            card.querySelector("d_produto").textContent = item.descricao;


            destino.appendChild(card);
        });
    } catch (error) {
        console.error('Erro na requisição:', error);
        destino.innerHTML = '<p>Desculpe, não foi possivel carregar as informações no momento.</p>';
    }
 }