import _ from "lodash";
import { Actor } from "./Actor";
import { Point } from "../types/Point";
import { angleToRad } from "../utils/angleToRad";
import { canvasWidth, canvasHeight } from "../utils/constantes";
import { checkLimits } from "../utils/checkLimits";
import { Barra } from "../actors/Barra";
import { Marcador } from "../actors/Marcador";
import { distance } from "../utils/distance";

const basketBall = require("../assets/bolas/basket.png");
const futBall = require("../assets/bolas/futbol.png");
const tenisBall = require("../assets/bolas/tenis.png");

export class Ball extends Actor {
  speed: Point;
  origin: Point;
  ballHeight: number;
  ballWidth: number;
  angleX: number;
  angleY: number;
  image: HTMLImageElement;
  constructor(initialPos: Point) {
    let random = _.random(0, 2);
    super(initialPos);
    this.speed = { x: initialPos.x, y: initialPos.y };
    this.origin = { x: initialPos.x, y: initialPos.y };
    // this.position = { x: initialPos.x, y: initialPos.y };
    this.ballWidth = 20;
    this.ballHeight = 20;
    this.angleX = 45;
    this.angleY = 45;
    this.image = new Image();
    switch (random) {
      case 0:
        this.image.src = basketBall;
        break;
      case 1:
        this.image.src = futBall;
        break;
      case 2:
        this.image.src = tenisBall;
        break;
    }
  }

  update(delta: number) {
    let marcador = new Marcador({ x: this.origin.x, y: this.origin.y });
    // NOTE: La velocidad depende del ángulo
    let newPos = {
      x: this.origin.x + angleToRad(this.angleX),
      y: this.origin.y + angleToRad(this.angleY),
    };
    this.origin = newPos;
    if (!checkLimits(newPos, this.ballHeight, this.ballWidth)) {
      if (newPos.x > canvasWidth - this.ballHeight || newPos.x < 0) {
        this.angleX *= -1;
      }
      if (newPos.y > canvasHeight - this.ballHeight || newPos.y < 0) {
        this.angleY *= -1;
      }
    }
    if (this.origin.x < 10) {
      marcador.p2 += 1;
    }
  }
  keyboard_event() {}
  draw(delta: number, ctx: CanvasRenderingContext2D) {
    ctx.drawImage(this.image, this.origin.x, this.origin.y, 20, 20);
  }
}
