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
    let counter = 0;

    // If this y position of the raindrop reaches 450 or greater, start back at the top of the screen.
    if (this.y >= 450) {
      this.y = 0;

      counter = counter++;
      console.log("Hit detected");
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
