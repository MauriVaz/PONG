import { Point } from '../types/Point';
import { Actor } from './Actor';
import { Ball } from './Ball';

export class Marcador extends Actor {
  p1: number;
  p2: number;
  constructor(initialPos: Point) {
    super(initialPos);
    this.p1 = 0;
    this.p2 = 0;
  }
  update() {
  }
  keyboard_event() {}
  draw(delta: number, ctx: CanvasRenderingContext2D) {
    ctx.font = '25px Arial';
    ctx.fillStyle = 'white';
    ctx.fillText(`Scoreboard: ${this.p1}-${this.p2}`, this.position.x, this.position.y);
  }
}