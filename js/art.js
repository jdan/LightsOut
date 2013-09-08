/**
 * Returns an Art object given an HTML canvas element.
 */
function Art(canvas) {
  this.canvas = canvas
  this.ctx = canvas.getContext('2d');
}

/**
 * Draws a square
 */
Art.prototype.drawSquare = function (x, y, w, h) {
  this.ctx.rect(x, y, w, h);
  this.ctx.strokeStyle = '#66b5ff';
  this.ctx.stroke();
}
