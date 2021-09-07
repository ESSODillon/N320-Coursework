function setup() {
  createCanvas(600, 500);
}

let count = 0;
let raindrops = [];
let ground = [];
let colors = ["#c0dbfc", "#408ec9", "#5c76b8", "#a1a6cf"];
let ground_color = {
  r: 138,
  g: 138,
  b: 138,
};

class Raindrop {
  constructor(x, y, radius, color) {
    // Sets up the blueprints for making raindrops
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.speed = 1 + Math.random() * 3;
    this.color = color;
  }

  preset() {
    // Creates a circle
    circle(this.x, this.y, this.radius);
    // Colors the raindrop
    fill(this.color);
  }

  fall() {
    // Sets the speed for falling along the y axis
    this.y = this.y + this.speed;

    if (this.y >= 450) {
      //console.log(count);
      count = count += 1;
    }

    if (count % 10 == 1) {
      //console.log("It worked");
      console.log(ground_color);

      ground_color.b += 0.5;
      if (ground_color.b >= 200) {
        ground_color.r += 0.1;
        ground_color.g += 0.1;
      }

      if (ground_color.r >= 200 && ground_color.g >= 200) {
        console.log(ground_color);
        ground_color.r = 138;
        ground_color.g = 138;
        ground_color.b = 138;
      }
    }

    // If this y position of the raindrop reaches 450 or greater, start back at the top of the screen.
    if (this.y >= 450) {
      this.y = 0;
    }

    // If speed is less than 15, accelerate. If it's greater than 15, slowdown.
    if (this.speed <= 12) {
      // Sets the acceleration of speed
      this.speed = this.speed + 0.05;
    } else {
      this.speed == 12;
    }
  }
}

class Ground {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }

  create(r, g, b) {
    fill(r, g, b);
    rect(this.x, this.y, this.width, this.height);
  }
}

// Class instance for ground
ground[0] = new Ground(0, 450, 600, 50);

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

  ground[0].create(ground_color.r, ground_color.g, ground_color.b);

  raindrops.forEach((Raindrop) => {
    Raindrop.preset();
    Raindrop.fall();
  });
}
