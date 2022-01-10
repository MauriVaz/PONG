import _ from 'lodash';
import { Point } from '../types/Point';
import { Actor } from './Actor';
import { canvasWidth, canvasHeight } from '../utils/constantes'

const basketBackground = require("../assets/fondos/campoBasket.jpg");
const futballBackground = require("../assets/fondos/campoFutbol.png");
const tenisBackground = require("../assets/fondos/canchaTenis.jpg");

export class Background extends Actor {
  image: HTMLImageElement;
  constructor(initialPos: Point) {
    let random = _.random(0, 2);
    super(initialPos);
    this.image = new Image();
    switch (random) {
      case 0:
        this.image.src = basketBackground;
        break;
      case 1:
        this.image.src = futballBackground;
        break;
      case 2:
        this.image.src = tenisBackground;
        break;
    }
  }
  update() {}
  keyboard_event() {}
  draw(delta: number, ctx: CanvasRenderingContext2D) {
    ctx.drawImage(this.image, 0, 0, canvasWidth, canvasHeight);
  }
}