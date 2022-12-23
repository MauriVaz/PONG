import { IActor } from "../actors/Actor";
import { Ball } from "../actors/Ball";
import { Barra } from "../actors/Barra";

class GameState {
  ball:IActor;
  constructor(actor:IActor) {
    this.ball = actor;
  }
  update(delta: number) {
  }
  addPoints() {
  }
}
export let state: GameState;
export const createGameState = (
  ball: Ball,
) => {
  state = new GameState(ball);
};
