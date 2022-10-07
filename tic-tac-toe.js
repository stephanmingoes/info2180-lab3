window.onload = () => {
  let board;
  let squares;
  let isX;
  const X_CLASS = "X";
  const O_CLASS = "O";
  const WINNING_COMBINATIONS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  function startGame() {
    isX = true;
    board = document.querySelector("#board");
    squares = board.children;
    for (let i = 0; i < squares.length; i++) {
      square = squares[i];
      square.classList.add("square");
      square.classList.remove(X_CLASS);
      square.classList.remove(O_CLASS);
      square.addEventListener("click", squareClick, { once: true });
    }
  }

  function squareClick(event) {
    if (isX) {
      event.target.classList.remove("O");
      event.target.classList.add("X");
      event.target.innerHTML = "X";
      isX = false;
      console.log(squares);
      return;
    }
    event.target.classList.remove("X");
    event.target.classList.add("O");
    event.target.innerHTML = "O";
    isX = true;
    console.log(squares);
    return;
  }

  function addXorO() {
    for (let i = 0; i < squares.length; i++) {
      element = squares[i];
      element.addEventListener("click", () => {
        console.log(squares);
      });
    }
  }
  startGame();
  addXorO();
};
