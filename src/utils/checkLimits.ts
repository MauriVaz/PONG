import { Point } from "../types/Point";

export const checkLimits = (position: Point, actorHeight :number, actorWidth :number, canvasWidth:number, canvasHeight:number) => {
  if (
    position.x <= canvasWidth - actorWidth
    && position.x > 0
    && position.y <= canvasHeight - actorHeight
    && position.y > 0) {
    return true;
  }
  return false;
};