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
    document.querySelector("#status").innerHTML =
      "Move your mouse over a square and click to play an X or an O.";
    squares = board.children;
    for (let i = 0; i < squares.length; i++) {
      square = squares[i];
      square.classList.add("square");
      square.classList.remove(X_CLASS);
      square.classList.remove(O_CLASS);
      square.innerHTML = null;
      square.addEventListener("click", squareClick, { once: true });
      square.addEventListener("mouseover", mouseHoverIn);
      square.addEventListener("mouseout", mouseHoverOut);
    }
  }
  function mouseHoverIn(event) {
    event.target.classList.add("hover");
  }
  function mouseHoverOut(event) {
    event.target.classList.remove("hover");
  }
  function squareClick(event) {
    placeMark(event);
    let currentClass = isX ? X_CLASS : O_CLASS;
    if (checkWin(currentClass)) {
      document.querySelector("#status").innerHTML = currentClass + " Won";
    }

    isX = !isX;
    return;
  }

  function placeMark(event) {
    if (isX) {
      event.target.classList.remove("O");
      event.target.classList.add("X");
      event.target.innerHTML = "X";
      return;
    }
    event.target.classList.remove("X");
    event.target.classList.add("O");
    event.target.innerHTML = "O";
  }

  function checkWin(currentClass) {
    return WINNING_COMBINATIONS.some((combination) => {
      return combination.every((index) => {
        return squares[index].classList.contains(currentClass);
      });
    });
  }

  document.querySelector(".btn").addEventListener("click", startGame);
  startGame();
};
