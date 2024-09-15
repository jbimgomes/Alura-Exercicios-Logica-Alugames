let emprestimos = 0;

function confirmaAcao(acao) {
  let confirmacao = window.confirm(`Tem certeza que deseja ${acao} o jogo?`);
  return confirmacao;
}

function alterarStatus(item) {
  let gameSelecionado = document.getElementById(`game-${item}`);
  let imagem = gameSelecionado.querySelector(".dashboard__item__img");
  let botao = gameSelecionado.querySelector(".dashboard__item__button");

  if (botao.classList.contains("dashboard__item__button--return")) {
    if (confirmaAcao("devolver")) {
      botao.classList.remove("dashboard__item__button--return");
      imagem.classList.remove("dashboard__item__img--rented");
      botao.innerHTML = "Alugar";
    }
  } else {
    if (confirmaAcao("alugar")) {
      botao.classList.add("dashboard__item__button--return");
      imagem.classList.add("dashboard__item__img--rented");
      botao.innerHTML = "Devolver";
      emprestimos++;
      imprimeNoConsole(emprestimos);
    }
  }
}

function imprimeNoConsole(text) {
  console.log(`Total de empréstimos do usuário: ${text}`);
}
