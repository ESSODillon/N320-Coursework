class Raindrop {
  constructor(x, y, radius, color) {
    // Sets up the blueprints for making raindrops
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.speed = 1 + Math.random() * 3;
    this.color = color;
  }

  fall() {
    // Creates a circle
    circle(this.x, this.y, this.radius);
    // Colors the raindrop
    fill(this.color);
    // Sets the speed for falling along the y axis
    this.y = this.y + this.speed;
    // Sets the acceleration of speed
    this.speed = this.speed + 0.1;
  }
}
