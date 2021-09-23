// Initialize all the HTML elements in my program
let contentWrapper = document.getElementById("wrapper");
let title = document.getElementById("title");
let rectangle = document.getElementById("blue_rectangle");
let alert = document.getElementById("alert");
let alert_button = document.getElementById("alert_button");
let row_squares = document.getElementsByClassName("row_square");

// A build-in for all the elements (go from nothing on the screen, to everything visible)
TweenMax.from(contentWrapper, {
  duration: 0.7,
  x: window.innerWidth,
  alpha: 0,
});

// A mouse over / highlight for each of the gallery elements below
function highlight() {
  TweenMax.to(event.target, { duration: 0.2, backgroundColor: "mediumpurple" });
}

// Recolors the square after your mouse exits its area
function recolor() {
  TweenMax.to(event.target, { duration: 0.2, backgroundColor: "purple" });
}

// A exit animation for when one gallery element is clicked
function squareEscape() {
  TweenLite.to(title, { duration: 0.7, x: window.innerWidth, display: "none" });

  TweenLite.to(rectangle, {
    duration: 0.7,
    x: window.innerWidth,
    display: "none",
  });

  TweenLite.from(alert, {
    duration: 3,
    x: window.innerWidth,
    alpha: 0,
  });

  TweenLite.to(alert, {
    display: "inline-block",
  });

  TweenLite.from(alert_button, {
    duration: 3,
    x: window.innerWidth,
    alpha: 0,
  });

  TweenLite.to(alert_button, {
    display: "block",
  });

  for (let i = 0; i < row_squares.length; i++) {
    TweenLite.to(row_squares[i], {
      duration: 0.7,
      x: window.innerWidth,
      display: "none",
    });
  }
}

// Refresh page so you can play again!
function refreshPage() {
  window.location.reload();
}
