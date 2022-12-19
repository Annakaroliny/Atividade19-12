var nomeProduto = "Patinho";
var preco = 30.50;
var estoque = 50;
var validade = "20/02/2023";

var elemento = document.querySelector("body");
elemento.innerHTML = `<p>Nome do produto: ${nomeProduto}</p>
                      <p>Preço: ${preco}</p>
                      <p>Estoque: ${estoque}</p>
                      <p>Validade: ${validade}</p>`;
                      
/*
document.getElementById("nome").innerHTML = nomeProduto;
document.getElementById("preco").innerHTML = preco;
document.getElementById("estoque").innerHTML = estoque;
document.getElementById("validade").innerHTML = validade;
*/
