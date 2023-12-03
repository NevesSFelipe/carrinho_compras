function adicionar() {
    listarProdutos();
}

function listarProdutos() {

    const input_produto = document.getElementById("produto");
    const input_quantidade = document.getElementById("quantidade");
    const section_carrinho = document.getElementById("lista-produtos");
    const span_total = document.getElementById("valor-total");

    let descricao_produto = input_produto.value;
    descricao_produto = descricao_produto.split(" - R$");
    let item = descricao_produto[0];
    let preco = descricao_produto[1].replace('R$','');

    let quantidade = input_quantidade.value;

    let html = ``;

    if(quantidade == "" || quantidade < 1) {
        alert("Quantidade do produto não informada");
        return;
    }

    html += `<section class="carrinho__produtos__produto">`;
        html +=  `<span class="texto-azul">${quantidade}x</span> ${item} <span class="texto-azul">R$${preco}</span>`;
    html += `</section>`;
 
    section_carrinho.innerHTML += html;

    atualizarPrecoFinal(span_total, quantidade, preco);
    input_quantidade.value = "";

}

function atualizarPrecoFinal(span_total, quantidade, preco) {    
    let totalCarrinho = span_total.textContent;    
    totalCarrinho = parseInt(totalCarrinho.replace('R$',''));
    span_total.textContent = totalCarrinho + (quantidade * preco);
}

function limpar() {
    window.location.reload();
}