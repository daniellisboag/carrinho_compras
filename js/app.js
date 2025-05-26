let totalCarrinho = 0;

function adicionar() {
   // Recuperar valores nome do produto, quantidade e valor.
   let produto = document.getElementById('produto').value;
   let quantidade = document.getElementById('quantidade').value;
   let nomeProduto = produto.split(' - ')[0];
   let valorProduto = produto.split(' - ')[1].replace('R$', '');
   
   // Calcular o preço, o nosso subtotal.
   let preco = quantidade * valorProduto;
   
   // Adicionar no carrinho.
   let produtoCarrinho = document.getElementById('lista-produtos');
   if (quantidade <= 0) {
      alert('Adicione a quantidade de itens.');
   } else {
      produtoCarrinho.innerHTML += `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${preco}</span>
        </section>`;
   }
   document.getElementById('quantidade').value = 0;

   // Atualizar o valor total.
   totalCarrinho = totalCarrinho + preco;
   let campoTotal = document.getElementById('valor-total');
   campoTotal.textContent = `R$${totalCarrinho}`;
   console.log(totalCarrinho);
}

function limpar() {
   let carrinho = document.getElementById('lista-produtos');
   document.getElementById('valor-total').textContent = 0;
   totalCarrinho = 0;
   carrinho.innerHTML = '';
}