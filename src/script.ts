window.onload = () => {
  var canvas = document.getElementById('canvas') as HTMLCanvasElement;
  var ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
  var img = new Image();
  img.src = '/public/img/fondos/campoBasket.png';
  ctx.strokeRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(img, 0, 0);
}