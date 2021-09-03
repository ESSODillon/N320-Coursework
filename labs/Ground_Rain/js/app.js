function setup() {
  createCanvas(600, 500);
}

let raindrops = [];
let ground = [];
let colors = ["#c0dbfc", "#408ec9", "#5c76b8", "#a1a6cf"];
let count = 0;
let ground_color = [138, 138, 138];

// Class instance for ground
ground[0] = new Ground(0, 450, 600, 50, ground_color);

// Raindrop instances plugging into an array. If you want too add more raindrops, change the for loop.
for (let i = 0; i <= 5; i++) {
  // Intializing variables for classes. Selects a random color from above, a random x / y position, and creates a random radius each time you reset the browser.
  let color_select = colors[Math.floor(Math.random() * colors.length)];
  let pos_y = Math.floor(Math.random() * 400) + 5;
  let pos_x = Math.floor(Math.random() * 575) + 25;
  let radius = Math.floor(Math.random() * 12) + 7;

  // Class instance
  let new_drop = new Raindrop(pos_x, pos_y, radius, color_select);

  // Pushes the class instance into the array
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
