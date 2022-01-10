import { Point } from "../types/Point";
import { canvasWidth, canvasHeight } from "../utils/constantes";

export const checkLimits = (position: Point, actorHeight :number, actorWidth :number) => {
  if (
    position.x <= canvasWidth - actorWidth
    && position.x > 0
    && position.y <= canvasHeight - actorHeight
    && position.y > 0) {
    return true;
  }
  return false;
};