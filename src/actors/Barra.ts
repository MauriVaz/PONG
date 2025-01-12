import { Actor, IActor } from "./Actor";
import { Point } from "../types/Point";
import { KeyboardMap, Carkey } from "../utils/keyboardMap";
import { checkLimits } from "../utils/checkLimits";
import { barraHeight, barraWidth } from "../utils/constantes";

export class Barra extends Actor implements IActor {
  origin: Point;
  color: string;
  position: Point;
  keyboardMap: KeyboardMap;
  barraWidth: number;
  barraHeight: number;
  activeKeys: Set<string>; // Rastrear teclas activas para esta barra

  constructor(initialPos: Point, keyboardMap: KeyboardMap, color: string) {
    super(initialPos);
    this.keyboardMap = keyboardMap; // Asignar mapa de teclas personalizado
    this.origin = { x: initialPos.x, y: initialPos.y };
    this.position = { x: initialPos.x, y: initialPos.y };
    this.color = color;
    this.barraWidth = barraWidth;
    this.barraHeight = barraHeight;
    this.activeKeys = new Set();

    // Escucha eventos de teclado
    window.addEventListener("keydown", (e) => this.handleKeyDown(e));
    window.addEventListener("keyup", (e) => this.handleKeyUp(e));
  }

  handleKeyDown(event: KeyboardEvent) {
    const key = event.key;
    if (this.keyboardMap[key] !== undefined) {
      this.activeKeys.add(key); // Agregar la tecla solo si está en el mapa de teclas
    }
  }

  handleKeyUp(event: KeyboardEvent) {
    const key = event.key;
    this.activeKeys.delete(key); // Eliminar la tecla del conjunto activo
  }

  update(delta: number) {
    let newPos = { x: this.origin.x, y: this.origin.y };

    // Detectar teclas activas basadas en el mapa de teclas
    this.activeKeys.forEach((key) => {
      const action = this.keyboardMap[key];
      if (action === Carkey.LEFT) {
        newPos.y -= 10; // Mover hacia arriba
      } else if (action === Carkey.RIGHT) {
        newPos.y += 10; // Mover hacia abajo
      }
    });

    // Verificar límites antes de actualizar posición
    if (checkLimits(newPos, this.barraHeight, this.barraWidth)) {
      this.origin.y = newPos.y;
    }
  }

  draw(delta: number, ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = this.color;
    ctx.fillRect(
      this.origin.x,
      this.origin.y,
      this.barraWidth,
      this.barraHeight
    );
  }
}
