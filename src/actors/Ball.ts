import _ from "lodash";
import { Actor, IActor } from "./Actor";
import { Point } from "../types/Point";
import { angleToRad } from "../utils/angleToRad";
import {
  canvasWidth, canvasHeight, ballWidth, ballHeight,
} from "../utils/constantes";
import { checkLimits } from "../utils/checkLimits";
import { Barra } from "./Barra";
import { Marcador } from "./Marcador";

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
  win: boolean;
  winner: string
  image: HTMLImageElement;
  barra1: Barra;
  barra2: Barra;

  marcador: Marcador;
  constructor(
    initialPos: Point,
    barra1: Barra,
    barra2: Barra,
    marcador: Marcador,

  ) {
    let random = _.random(0, 2);
    super(initialPos);
    this.speed = { x: initialPos.x, y: initialPos.y };
    this.origin = { x: initialPos.x, y: initialPos.y };
    this.position = { x: initialPos.x, y: initialPos.y };
    this.ballWidth = ballWidth;
    this.ballHeight = ballHeight;
    this.angleX = 60;
    this.angleY = 60;
    this.win = false;
    this.winner = "";
    this.barra1 = barra1;
    this.barra2 = barra2;
    this.marcador = marcador;
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
    let barra1 = this.barra1.origin;
    let barra2 = this.barra2.origin;
    let myPos = this.origin;
    // Distancia de la bola con respecto a la parte de arriba de las barras
    let distance1 = Math.sqrt((myPos.x - barra1.x) ** 2 + (myPos.y - barra1.y) ** 2);
    let distance2 = Math.sqrt((myPos.x - barra2.x) ** 2 + (myPos.y - barra2.y) ** 2);
    // Distancia de la bola con respecto al medio de la barra
    let distance3 = Math.sqrt((myPos.x - barra1.x) ** 2 + (myPos.y - barra1.y - 60) ** 2);
    let distance4 = Math.sqrt((myPos.x - barra2.x) ** 2 + (myPos.y - barra2.y - 60) ** 2);
    // Distancia de la boal con respecto a la parte de abajo de las barras
    let distance5 = Math.sqrt((myPos.x - barra1.x) ** 2 + (myPos.y - barra1.y - 120) ** 2);
    let distance6 = Math.sqrt((myPos.x - barra2.x) ** 2 + (myPos.y - barra2.y - 120) ** 2);
    if (distance1 < 30 || distance2 < 30 || distance5 < 30 || distance6 < 30) {
      this.angleX *= -1.2;
      this.angleY *= -1.1;
    }
    if (distance3 < 30 || distance4 < 30) {
      this.angleX *= -1
      this.angleY *= -1
    }
    // NOTE: La velocidad depende del ángulo a un ángulo más grande mayor velocidad
    if (this.win !== true) {
      let newPos = {
        x: this.origin.x + angleToRad(this.angleX),
        y: this.origin.y + angleToRad(this.angleY),
      };
      this.origin = newPos;
      if (!checkLimits(newPos, this.ballHeight, this.ballWidth)) {
        if (newPos.x > canvasWidth - this.ballHeight) {
          this.angleX *= -0;
          this.angleY *= 0;
          this.winner = "Player 1"
          this.marcador.p1 += 1;
          this.origin = { x: 350, y: 230 }
          this.angleX = 45;
          this.angleY = 45;
        } else if (newPos.x < 0) {
          this.angleX *= 0;
          this.angleY *= 0;
          this.winner = "Player 2"
          this.angleX = -45;
          this.angleY = -45;
          this.marcador.p2 += 1;
          this.origin = { x: 350, y: 230 }
        }
        if (newPos.y > (canvasHeight - this.ballHeight / 2) || newPos.y < 0) {
          this.angleY *= -1;
        }
        if (this.marcador.p1 === 9 || this.marcador.p2 === 9) {
          this.win = true
        } else {
          this.win = false;
        }
      }
    }
  }
  keyboard_event() {}
  draw(delta: number, ctx: CanvasRenderingContext2D) {
    ctx.drawImage(this.image, this.origin.x, this.origin.y, 20, 20);
    if (this.win === true) {
      ctx.font = "bold 30px Arial"
      ctx.fillStyle = "white";
      ctx.fillText(`The winner is ${this.winner} `, 240, 230)
    }
  }
}
