import { Point } from '../types/Point';
import { Actor } from './Actor';
import { canvasWidth, canvasHeight } from '../utils/constantes'

const barcelona = require("../assets/teams/barcelona.png");
const madrid = require("../assets/teams/madrid.png");

export class Teams extends Actor {
  image1: HTMLImageElement;
  image2: HTMLImageElement;
  constructor(initialPos: Point) {
    super(initialPos);
    this.image1 = new Image();
    this.image1.src = barcelona;
    this.image2 = new Image();
    this.image2.src = madrid;
  }
  update() {}
  keyboard_event() {}
  draw(delta: number, ctx: CanvasRenderingContext2D) {
    ctx.drawImage(this.image1, 200, 0, 40, 40);
    ctx.drawImage(this.image2, 420, 0, 40, 40);
  }
}