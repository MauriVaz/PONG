export enum Carkey {
    LEFT,
    RIGHT,
}

export interface KeyboardMap {
    [key: string]: Carkey;
}

export let MAP_A = {
  ArrowLeft: Carkey.LEFT,
  ArrowRight: Carkey.RIGHT,
};
export let MAP_B = {
  a: Carkey.LEFT,
  A: Carkey.LEFT,
  d: Carkey.RIGHT,
  D: Carkey.RIGHT,
};