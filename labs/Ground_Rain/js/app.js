function setup() {
  createCanvas(600, 500);
}

let raindrops = [];
let ground = [];
let colors = ["#c0dbfc", "#408ec9", "#5c76b8", "#a1a6cf"];
let count = 0;

ground[0] = new Ground(0, 450, 600, 50, [138, 138, 138]);

for (let i = 0; i <= 5; i++) {
  let color_select = colors[Math.floor(Math.random() * colors.length)];
  let pos_y = Math.floor(Math.random() * 400) + 5;
  let pos_x = Math.floor(Math.random() * 575) + 25;
  let radius = Math.floor(Math.random() * 12) + 7;

  let new_drop = new Raindrop(pos_x, pos_y, radius, color_select);

  raindrops.push(new_drop);
}

function draw() {
  noStroke();
  background(34, 32, 79);

  ground[0].create();

  raindrops.forEach((Raindrop) => {
    Raindrop.preset();
    Raindrop.fall();
  });
}
