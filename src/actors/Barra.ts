import { Actor, IActor } from './Actor';
import { Point } from '../types/Point';
import { KeyboardMap } from "../utils/keyboardMap";

export class Barra extends Actor implements IActor {
  origin: Point;
  color: string;
  speed: Point;
  position: Point;
  keyboardMap: KeyboardMap;

  constructor(initialPos: Point, keyboardMap: KeyboardMap) {
    super(initialPos);
    this.keyboardMap = keyboardMap;
    this.origin = { x: initialPos.x, y: initialPos.y };
    this.position = { x: initialPos.x, y: initialPos.y };
    this.color = 'white';
    this.speed = { x: initialPos.x, y: initialPos.y };
  }
  update(delta: number) {
  // Set X position
    let newPosY = this.origin.y + this.speed.y;
    if (newPosY < 480 && newPosY >= 0) {
      this.origin.x = newPosY;
    }
  }
  keyboard_event_down(key: string) {
    switch (key) {
      case 'ArrowUp':
        this.origin.y -= 10;
        break;
      case 'ArrowDown':
        this.origin.y += 10;
        break;
    }
  }
  draw(delta: number, ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.fillStyle = 'white';
    ctx.fillRect(this.origin.x, this.origin.y, 20, 120);
    ctx.closePath();
    console.log(`Position: ${this.origin.y}`);
  }
}