class Raindrop {
  constructor(radius) {
    // Sets up the blueprints for making raindrops
    this.x = Math.random(0, 600);
    this.y = Math.random(0, 500);
    this.radius = Math.random(0, 5);
    this.speed = 1 + Math.random() * 2;
  }

  fall() {
    // Colors the rain drops
    fill(173, 241, 255);
    // Draws the circle in p5.js
    circle(this.x, this.y, this.radius);
    // Sets the speed for falling along the y axis
    this.y = this.y + this.speed;
    // Sets the acceleration of speed
    this.speed = this.speed + 0.1;
  }
}
