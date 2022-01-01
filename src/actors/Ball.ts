import { Actor } from './Actor';
import { Point } from '../types/Point';

export class Ball extends Actor {
  speed: number;
  initialSpeed: number;
  origin: Point;
  position: Point;
  constructor(initialPos: Point) {
    super(initialPos);
    this.speed = 0;
    this.initialSpeed = 5;
    this.origin = { x: initialPos.x, y: initialPos.y };
    this.position = { x: initialPos.x, y: initialPos.y };
  }
  update() {}
  keyboard_event() {}
  draw(delta: number, ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.fillStyle = 'white';
    ctx.fillRect(this.origin.x, this.origin.y, 15, 15);
    ctx.closePath();
  }
}