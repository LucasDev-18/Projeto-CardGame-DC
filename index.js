const btnAvancar = document.getElementById ('btn-avançar');
const btnVoltar = document.getElementById ('btn-voltar');

const cards = document.querySelectorAll('.card')
let cardAtual = 0

function esconderCardSelecionado() {
  const cardSelecionado = document.querySelector(".selecionado")
  cardSelecionado.classList.remove("selecionado")
}

document.getElementById ('btn-avançar').addEventListener('click', function(){

  if(cardAtual === cards.length - 1) return

  cardAtual++;
  console.log(cards[cardAtual].classList.add('selecionado'))
  
  const cardSelecionado = document.querySelector(".selecionado")
  cardSelecionado.classList.remove("selecionado")
})

document.getElementById ('btn-voltar').addEventListener('click', function(){

  if (cardAtual === 0) return

  esconderCardSelecionado()

  cardAtual--;
  console.log(cards[cardAtual].classList.add('selecionado'))
  
})