function renderGame() {
  let board = document.querySelector("#board");
  squares = board.children;
  for (let i = 0; i < squares.length; i++) squares[i].classList.add("square");
}

window.onload = () => {
  renderGame();
};
