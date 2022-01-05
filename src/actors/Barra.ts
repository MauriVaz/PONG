import { Actor, IActor } from './Actor';
import { Point } from '../types/Point';
import { KeyboardMap, Carkey } from "../utils/keyboardMap";
import { checkLimits } from '../utils/checkLimits';

export class Barra extends Actor implements IActor {
  origin: Point;
  color: string;
  speed: Point;
  position: Point;
  keyboardMap: KeyboardMap;
  barraWidth: number;
  barraHeight: number;

  constructor(initialPos: Point, keyboardMap: KeyboardMap, color:string) {
    super(initialPos);
    this.keyboardMap = keyboardMap;
    this.origin = { x: initialPos.x, y: initialPos.y };
    this.position = { x: initialPos.x, y: initialPos.y };
    this.color = color;
    this.speed = { x: initialPos.x, y: initialPos.y };
    this.barraWidth = 20;
    this.barraHeight = 120;
  }
  update(delta: number) {
    let newPos = {
      x: this.origin.x + 10,
      y: this.origin.y + 10,
    }
    if (checkLimits(newPos, this.barraHeight, this.barraWidth, 720, 480)) {
      this.position = newPos;
    }
  }
  keyboard_event_up(key: string) {
    let tecla = this.keyboardMap[key];
    if (tecla === Carkey.LEFT) {
      this.origin.y -= 10;
      this.speed.y -= 10;
    } else if (tecla === Carkey.RIGHT) {
      this.origin.y += 10;
      this.speed.y += 10;
    }
  }
  draw(delta: number, ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.origin.x, this.origin.y, this.barraWidth, this.barraHeight);
  }
}