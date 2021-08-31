function setup() {
  createCanvas(600, 500);
}

let raindrops = [];
let colors = ["#c0dbfc", "#408ec9", "#1e3b63", "#5c76b8", "#a1a6cf"];
console.log(raindrops);

for (let i = 0; i <= 30; i++) {
  let color_select = colors[Math.floor(Math.random() * colors.length)];
  let pos_y = Math.floor(Math.random() * 400) + 5;
  let pos_x = Math.floor(Math.random() * 575) + 25;
  let radius = Math.floor(Math.random() * 25) + 15;

  let new_drop = new Raindrop(pos_x, pos_y, radius, color_select);

  raindrops.push(new_drop);
}

function draw() {
  background(34, 32, 79);

  for (let i = 0; i <= 30; i++) {
    raindrops[i].fall();
  }
}
