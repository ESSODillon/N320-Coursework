class Ground {
  constructor(x, y, width, height, color) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
  }

  create() {
    fill(this.color);
    rect(this.x, this.y, this.width, this.height);
  }
}
