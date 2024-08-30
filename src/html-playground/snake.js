export default class Snake {
  constructor(x, y, unit) {
    this.unit = unit;
    this.body = [{ x, y }];
    this.direction = "down";
  }

  changeDirection(newDirection) {
    this.direction = newDirection;
    return this;
  }

  getMovement() {
    switch (this.direction) {
      case "up":
        return {
          x: 0,
          y: this.unit,
        };
      case "down":
        return {
          x: 0,
          y: -this.unit,
        };
      case "left":
        return {
          x: -this.unit,
          y: 0,
        };
      case "right":
        return {
          x: this.unit,
          y: 0,
        };
      default:
        return {
          x: 0,
          y: 0,
        };
    }
  }

  move() {
    if (!this.body.length) return this;
    const { x, y } = this.getMovement();
    let newHead = {
      x: this.body[0].x + x,
      y: this.body[0].y + y,
    };
    this.body = [newHead, ...this.body.slice(0, this.body.length - 1)];
  }
}
