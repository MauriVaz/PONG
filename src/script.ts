import { Barra } from './actors/Barra';
import { IActor } from './actors/Actor';

window.onload = () => {
  var canvas = document.getElementById('canvas') as HTMLCanvasElement;
  var ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
  let barra1 = new Barra({ x: 0, y: 120 }, 'green', 0);
  let barra2 = new Barra({ x: 640, y: 120 }, 'green', 0);
  let actors: Array<IActor> = [barra1, barra2];
  let lastFrame = 0;
  const render = (time: number) => {
    let delta = (time - lastFrame) / 1000;
    lastFrame = time;
    actors.forEach((e) => e.update(delta));
    ctx.fillRect(10, 10, canvas.width, canvas.height);
    actors.forEach((e) => {
      ctx.save();
      e.draw(delta, ctx);
      ctx.restore();
    });
    window.requestAnimationFrame(render);
  };

  window.requestAnimationFrame(render);
}