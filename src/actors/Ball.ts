import { Actor } from './Actor';
import { Point } from '../types/Point';
import { checkLimits } from '../utils/checkLimits';

export class Ball extends Actor {
  speed: Point;
  initialSpeed: number;
  origin: Point;
  position: Point;
  color: string;
  ballHeight: number;
  ballWidth: number;
  constructor(initialPos: Point, color: string) {
    super(initialPos);
    this.speed = { x: initialPos.x, y: initialPos.y };
    this.initialSpeed = 4;
    this.origin = { x: initialPos.x, y: initialPos.y };
    this.position = { x: initialPos.x, y: initialPos.y };
    this.ballWidth = 20;
    this.ballHeight = 20;
    this.color = color;
  }
  update(delta: number) {
    let newPos = {
      x: this.origin.x - 5 - this.speed.x * (delta / 720),
      y: this.origin.y - 1.5 - this.speed.y * (delta / 720),
    }
    console.log(`PositionX: ${newPos.x}, PositionY: ${newPos.y}`);
    if (checkLimits(newPos, this.ballHeight, this.ballWidth, 720, 480)) {
      this.origin = newPos;
    } else {
      newPos = {
        x: this.origin.x + 1.5 + this.speed.x * (delta / 720),
        y: this.origin.y + 1.5 + this.speed.y * (delta / 720),
      }
    }
  }
  keyboard_event() {}
  draw(delta: number, ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.origin.x, this.origin.y, 20, 20);
    ctx.fillText(`PositionX: ${this.origin.x}, ${this.origin.y}`, this.position.x, this.position.y);
  }
}