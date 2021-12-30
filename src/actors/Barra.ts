import { Actor, IActor } from './Actor';
import { Point } from '../types/Point';

export class Barra extends Actor implements IActor {
  barraSize: number;
  origin: Point;
  color: string;
  speed: Point;

  constructor(initialPos: Point, color = 'grey', initialSpeed = 0) {
    super(initialPos);
    this.barraSize = 30;
    this.origin = { x: initialPos.x, y: initialPos.y };
    this.color = color;
    this.speed = { x: initialPos.x, y: initialPos.y };
  }
  keyboard_event(key: string) {
    switch (key) {
      case 'ArrowRight':
        console.log('down');
        this.speed.y += 10;
        break;
      case 'ArrowLeft':
        console.log('up');
        this.speed.y += 10;
        break;
    }
  }
  draw(delta: number, ctx: CanvasRenderingContext2D) {
    let origin = this.origin;
    let height = 0;
    if (this.position.y < 0) {
      this.position.y = 1;
    } else if (this.position.y > 720) {
      this.position.y = 719;
    }
    ctx.strokeStyle = 'grey';
    ctx.lineWidth = 4;
    ctx.save();
    ctx.translate(origin.x, origin.y);
    ctx.beginPath();
    ctx.fillStyle = 'green';
    ctx.fillRect(30, 30, 30, 120);
    ctx.font = '18px Arial';
    ctx.fillStyle = this.color;
    ctx.lineTo(0, 0);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();
    ctx.restore();
  }
}