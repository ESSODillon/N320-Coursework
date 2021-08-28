function setup() {
  createCanvas(600, 500);
  background(34, 32, 79);
}

function draw() {
  let drops = 0;
  while (drops <= 2) {
    console.log("Hello World");
    let rain = new Raindrop(200);
    if (rain.pos_y >= 500) {
      drops = drops + 1;
    }
  }
}
