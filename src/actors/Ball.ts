import { Actor } from './Actor';
import { Point } from '../types/Point';

export class Ball extends Actor {
  speed: number;
  initialSpeed: number;
  origin: Point;
  position: Point;
  image: HTMLImageElement;
  color: string;
  constructor(initialPos: Point, color: string) {
    super(initialPos);
    this.speed = 0;
    this.initialSpeed = 5;
    this.origin = { x: initialPos.x, y: initialPos.y };
    this.position = { x: initialPos.x, y: initialPos.y };
    this.image = new Image();
    this.image.src = '../../public/img/bolas/basket.png'
    this.color = color;
  }
  update() {}
  keyboard_event() {}
  draw(delta: number, ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.fillRect(this.origin.x, this.origin.y, 15, 15);
    ctx.closePath();
  }
}