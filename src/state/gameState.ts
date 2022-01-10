import { IActor } from "../actors/Actor";
import { Ball } from "../actors/Ball";
import { Marcador } from "../actors/Marcador"
import { Barra } from "../actors/Barra"
import { Background } from "../actors/background"
import { FPSViewer } from "../actors/FPSViewer";

class GameState {
  ball:Ball
  chrono:number;
  barra1:Barra;
  barra2:Barra;
  marcador:Marcador;
  background:Background;
  fps:FPSViewer;
  constructor(barra1:Barra, barra2:Barra, ball:Ball, marcador:Marcador, background:Background, fps:FPSViewer) {
    this.chrono = 0;
    this.barra1 = barra1;
    this.barra2 = barra2;
    this.ball = ball;
    this.marcador = marcador;
    this.background = background;
    this.fps = fps;
  }
  update(delta: number) {
    this.chrono += delta;
  }
  addPoints() {
    if (this.background.position.y < 10) {
      this.marcador.p2 += 1;
    }
    console.log(this.marcador.p2)
  }
}
export let state: GameState;
export const createGameState = (barra1:Barra, barra2:Barra, ball:Ball, marcador:Marcador, background:Background, fps:FPSViewer) => {
  state = new GameState(barra1, barra2, ball, marcador, background, fps);
}