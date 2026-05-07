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
                    <div class="bloco_imagem">
                        <img src="img/${item.imagem}" alt="Foto de ${item.nome}" class="imagem_produto">
                    </div>
                    <h2></h2>
                    <p class="p_produto"></p>
                    <a class="botao_card" href="${item.endereco}">Saiba mais</a>
            `;

            card.querySelector('h2').textContent = item.nome;
            card.querySelector('p').textContent = item.preco;


            destino.appendChild(card);
        });
    } catch (error) {
        console.error('Erro na requisição:', error);
        destino.innerHTML = '<p>Desculpe, não foi possivel carregar as informações no momento.</p>';
    }
 }