let contentWrapper = document.getElementById("wrapper");
let row_squares = document.getElementsByClassName("row_square");
let squares_array = ["one", "two", "three", "four", "five", "six"];

TweenMax.from(contentWrapper, {
  duration: 0.7,
  x: window.innerWidth,
  alpha: 0,
});

function highlight() {
  for (let i = 0; i < row_squares.length; i++) {
    TweenLite.from(row_squares[i], {
      duration: i * 0.6,
      backgroundColor: "purple",
    });
    TweenLite.to(row_squares[i], {
      duration: i * 0.6,
      backgroundColor: "mediumpurple",
    });
  }
}

function squareEscape() {
  for (let i = 0; i < row_squares.length; i++) {
    TweenLite.to(row_squares[i], {
      duration: 2.5,
      backgroundColor: "purple",
    });
  }
}
