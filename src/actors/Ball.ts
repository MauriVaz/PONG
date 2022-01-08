import { Actor } from './Actor';
import { Point } from '../types/Point';
import { angleToRad } from '../utils/angleToRad';
import { canvasWidth, canvasHeight } from '../utils/constantes';

export class Ball extends Actor {
  speed: Point;
  initialSpeed: number;
  origin: Point;
  color: string;
  ballHeight: number;
  ballWidth: number;
  angleX: number;
  angleY: number;
  constructor(initialPos: Point, color: string) {
    super(initialPos);
    this.speed = { x: initialPos.x, y: initialPos.y };
    this.initialSpeed = 4;
    this.origin = { x: initialPos.x, y: initialPos.y };
    // this.position = { x: initialPos.x, y: initialPos.y };
    this.ballWidth = 20;
    this.ballHeight = 20;
    this.color = color;
    this.angleX = 45;
    this.angleY = 45;
  }
  update(delta: number) {
    let newPos = {
      x: this.origin.x + angleToRad(this.angleX) + this.speed.x * (delta / 720),
      y: this.origin.y + angleToRad(this.angleY) + this.speed.y * (delta / 720),
    }
    this.origin = newPos;
    if (newPos.x > canvasWidth - this.ballHeight || newPos.x < 0) {
      this.angleX *= -1;
    }
    if (newPos.y > canvasHeight - this.ballHeight || newPos.y < 0) {
      this.angleY *= -1;
    }
  }
  keyboard_event() {}
  draw(delta: number, ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.origin.x, this.origin.y, 20, 20);
  }
}